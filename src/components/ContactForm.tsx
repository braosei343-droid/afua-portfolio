"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error || "Unable to send your message right now.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-[var(--line)] bg-surface p-8 sm:p-10">
        <p className="eyebrow">Sent</p>
        <h2 className="display mt-3 text-3xl text-ink">Thank you</h2>
        <p className="mt-4 text-ink-soft leading-relaxed">
          Your message has been sent. I will get back to you soon.
        </p>
        <button
          type="button"
          className="mt-8 rounded-full bg-accent px-6 py-3 text-sm font-medium text-[#f4f8f6]"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-sm border border-[var(--line)] bg-surface p-8 sm:p-10"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow">Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-sm border border-[var(--line)] bg-[rgba(247,249,247,0.9)] px-4 py-3 text-ink outline-none transition focus:border-accent"
          />
        </label>

        <label className="block">
          <span className="eyebrow">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-sm border border-[var(--line)] bg-[rgba(247,249,247,0.9)] px-4 py-3 text-ink outline-none transition focus:border-accent"
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="eyebrow">Message</span>
          <textarea
            name="message"
            required
            rows={7}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2 w-full resize-y rounded-sm border border-[var(--line)] bg-[rgba(247,249,247,0.9)] px-4 py-3 text-ink outline-none transition focus:border-accent"
          />
        </label>
      </div>

      {error ? (
        <p className="mt-5 text-sm text-[#8a3b32]" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 rounded-full bg-accent px-6 py-3 text-sm font-medium text-[#f4f8f6] transition hover:bg-accent-soft disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
