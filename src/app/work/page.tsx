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
        <h1 className="display mt-3 text-5xl text-ink sm:text-6xl">Selected work</h1>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Link
          href="/work/net-zero-hamilton"
          className="group relative overflow-hidden rounded-sm border border-[var(--line)] bg-[linear-gradient(145deg,#25564a,#1a3a32)] p-8 text-on-accent sm:p-10"
        >
          <p className="text-xs tracking-[0.18em] text-[#c5ddd4] uppercase">Featured</p>
          <h2 className="display mt-4 text-4xl text-on-accent">
            Towards a Net Zero Hamilton Square
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#e4efe9]">
            An MSc. student volunteer’s reflections
          </p>
          <p className="mt-8 text-sm font-medium text-on-accent">
            Open {String.fromCharCode(8594)}
          </p>
        </Link>

        <Link
          href="/work/winter-school"
          className="group rounded-sm border border-[var(--line)] bg-surface p-8 transition hover:border-accent sm:p-10"
        >
          <p className="eyebrow">University of Liverpool · 2025</p>
          <h2 className="display mt-4 text-4xl text-ink group-hover:text-accent">
            Winter School Generative AI Students Competition
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Exploring the Integration of Generative AI in Architectural Pedagogy: Unveiling the
            Impacts on Creativity
          </p>
          <p className="mt-8 text-sm font-medium text-accent">
            View slides {String.fromCharCode(8594)}
          </p>
        </Link>
      </div>

      <section id="msc-projects" className="mt-20 scroll-mt-28">
        <div className="max-w-2xl">
          <p className="eyebrow">MSc projects</p>
          <h2 className="display mt-3 text-4xl text-ink sm:text-5xl">MSc Projects</h2>
          <p className="mt-4 text-sm text-muted">View-only PDFs from the MSc portfolio.</p>
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
              </div>
              <p className="text-sm font-medium text-accent sm:text-right">
                View {String.fromCharCode(8594)}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
