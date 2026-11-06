import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-[rgba(24,32,29,0.04)]">
      <div className="section-shell grid gap-8 py-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="display text-3xl text-ink">{site.name}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            Architect, educator, and Chevening Scholar working at the intersection of
            Vernacular Architecture, climate resilience, and creative practice.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="eyebrow">Based in</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li>{site.location}</li>
              <li>
                <Link href="/contact" className="hover:text-accent">
                  Send a message
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Profiles</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                {site.socials.linkedin ? (
                  <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
                    LinkedIn
                  </a>
                ) : (
                  "LinkedIn — link coming"
                )}
              </li>
              <li>
                {site.socials.ngo ? (
                  <a href={site.socials.ngo} target="_blank" rel="noreferrer" className="hover:text-accent">
                    {site.socials.ngoLabel}
                  </a>
                ) : (
                  `${site.socials.ngoLabel} — link coming`
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--line)]">
        <div className="section-shell flex flex-wrap items-center justify-between gap-2 py-4 text-xs text-muted">
          <p>© 2026 {site.name}</p>
          <p>Portfolio for practice, research & art</p>
        </div>
      </div>
    </footer>
  );
}
