import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="section-shell py-14 sm:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow">Contact</p>
        <h1 className="display mt-3 text-5xl text-ink sm:text-6xl">
          Let’s begin a conversation
        </h1>
        <p className="mt-5 text-ink-soft">
          For teaching collaborations, research conversations, architectural enquiries, or
          speaking invitations — reach out directly.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <a
          href={`mailto:${site.email}`}
          className="rounded-sm border border-[var(--line)] bg-surface p-7 transition hover:border-accent"
        >
          <p className="eyebrow">Email</p>
          <p className="mt-3 text-xl text-ink">{site.email}</p>
        </a>
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          className="rounded-sm border border-[var(--line)] bg-surface p-7 transition hover:border-accent"
        >
          <p className="eyebrow">Phone</p>
          <p className="mt-3 text-xl text-ink">{site.phone}</p>
        </a>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <a
          href={site.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-sm border border-[var(--line)] bg-surface p-7 transition hover:border-accent"
        >
          <p className="eyebrow">LinkedIn</p>
          <p className="mt-3 text-xl text-ink">View profile</p>
          <p className="mt-2 text-sm text-muted">Professional network & updates</p>
        </a>
        <a
          href={site.socials.ngo}
          target="_blank"
          rel="noreferrer"
          className="rounded-sm border border-[var(--line)] bg-surface p-7 transition hover:border-accent"
        >
          <p className="eyebrow">NGO</p>
          <p className="mt-3 text-xl text-ink">{site.socials.ngoLabel}</p>
          <p className="mt-2 text-sm text-muted">Visit organisation website</p>
        </a>
      </div>
      <p className="mt-8 text-sm text-muted">Based in {site.location}</p>
    </div>
  );
}
