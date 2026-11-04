import type { Metadata } from "next";
import Link from "next/link";
import { mscProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <div className="section-shell py-14 sm:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow">Work</p>
        <h1 className="display mt-3 text-5xl text-ink sm:text-6xl">
          Projects that hold climate, craft, and place
        </h1>
        <p className="mt-5 text-ink-soft">
          Academic research, heritage volunteering, and studio experimentation from the
          Chevening year and ongoing practice.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Link
          href="/work/net-zero-hamilton"
          className="group relative overflow-hidden rounded-sm border border-[var(--line)] bg-[linear-gradient(145deg,#25564a,#1a3a32)] p-8 text-[#eef5f1] sm:p-10"
        >
          <p className="text-xs tracking-[0.18em] text-[#b7d2c8] uppercase">Featured case study</p>
          <h2 className="display mt-4 text-4xl">Net Zero Hamilton Square</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#d5e6df]">
            Text and site images from the Wirral Council volunteering placement — documentation,
            guidance drafting, and reflections on heritage retrofit.
          </p>
          <p className="mt-8 text-sm font-medium text-[#f4faf7]">
            Open case study {String.fromCharCode(8594)}
          </p>
        </Link>

        <Link
          href="/work/winter-school"
          className="group rounded-sm border border-[var(--line)] bg-surface p-8 transition hover:border-accent sm:p-10"
        >
          <p className="eyebrow">Students competition</p>
          <h2 className="display mt-4 text-4xl text-ink group-hover:text-accent">
            Winter School · Generative AI
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Eighteen slides exploring generative AI in architectural pedagogy and its impact on
            creativity.
          </p>
          <p className="mt-8 text-sm font-medium text-accent">
            View slides {String.fromCharCode(8594)}
          </p>
        </Link>
      </div>

      <section id="msc-projects" className="mt-20 scroll-mt-28">
        <div className="max-w-2xl">
          <p className="eyebrow">MSc projects</p>
          <h2 className="display mt-3 text-4xl text-ink sm:text-5xl">
            Open in the browser — viewing only
          </h2>
          <p className="mt-4 text-sm text-muted">
            Each project opens in an on-site PDF viewer. Downloads are not offered from this
            portfolio.
          </p>
        </div>

        <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {mscProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/msc/${project.slug}`}
              className="group grid gap-3 py-7 transition sm:grid-cols-[140px_1fr_auto] sm:items-center"
            >
              <p className="text-xs tracking-[0.16em] text-accent uppercase">{project.accent}</p>
              <div>
                <h3 className="text-xl font-medium text-ink group-hover:text-accent sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
              </div>
              <p className="text-sm font-medium text-accent sm:text-right">
                View PDF {String.fromCharCode(8594)}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
