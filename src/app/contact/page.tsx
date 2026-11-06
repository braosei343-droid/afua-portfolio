import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="section-shell py-14 sm:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow">Contact</p>
        <h1 className="display mt-3 text-5xl text-ink sm:text-6xl">Contact</h1>
        <p className="mt-5 text-ink-soft leading-relaxed">
          Send a message using the form below.
        </p>
      </div>

      <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.75fr)] lg:gap-14">
        <ContactForm />

        <aside className="space-y-8 lg:pt-2">
          <div>
            <p className="eyebrow">Also find me on</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              For professional updates and the sustainability initiative.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="block border-t border-[var(--line)] pt-5 transition hover:border-accent"
            >
              <p className="text-xs tracking-[0.16em] text-accent uppercase">LinkedIn</p>
              <p className="mt-2 text-xl text-ink">View profile</p>
            </a>
            <a
              href={site.socials.ngo}
              target="_blank"
              rel="noreferrer"
              className="block border-t border-[var(--line)] pt-5 transition hover:border-accent"
            >
              <p className="text-xs tracking-[0.16em] text-accent uppercase">Organisation</p>
              <p className="mt-2 text-xl text-ink">{site.socials.ngoLabel}</p>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
