import { site } from "@/data/site";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return Response.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (name.length > 120 || email.length > 200 || message.length > 5000) {
    return Response.json({ error: "One or more fields are too long." }, { status: 400 });
  }

  const subject = `Portfolio contact from ${name}`;
  const textContent = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const htmlContent = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  const brevoKey = process.env.BREVO_API_KEY?.trim();
  const notifyEmail = process.env.CONTACT_TO_EMAIL?.trim() || site.email;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL?.trim() || "braosei343@gmail.com";
  const fromName =
    process.env.CONTACT_FROM_NAME?.trim() || `${site.name} · Portfolio`;

  try {
    if (brevoKey) {
      await sendViaBrevo({
        apiKey: brevoKey,
        toEmail: notifyEmail,
        fromEmail,
        fromName,
        replyToEmail: email,
        replyToName: name,
        subject,
        htmlContent,
        textContent,
      });
    } else {
      await sendViaFormSubmit({
        toEmail: notifyEmail,
        name,
        email,
        subject,
        message,
      });
    }
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Send failed.";
    return Response.json(
      { error: `Unable to send your message right now. ${detail}` },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}

async function sendViaBrevo({
  apiKey,
  toEmail,
  fromEmail,
  fromName,
  replyToEmail,
  replyToName,
  subject,
  htmlContent,
  textContent,
}: {
  apiKey: string;
  toEmail: string;
  fromEmail: string;
  fromName: string;
  replyToEmail: string;
  replyToName: string;
  subject: string;
  htmlContent: string;
  textContent: string;
}) {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: { email: fromEmail, name: fromName },
      to: [{ email: toEmail, name: toEmail }],
      replyTo: { email: replyToEmail, name: replyToName },
      subject,
      htmlContent,
      textContent,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Brevo error ${response.status}`);
  }
}

async function sendViaFormSubmit({
  toEmail,
  name,
  email,
  subject,
  message,
}: {
  toEmail: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(toEmail)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _subject: subject,
      _template: "table",
      _captcha: "false",
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Form service error ${response.status}`);
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
