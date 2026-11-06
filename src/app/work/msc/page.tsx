import type { Metadata } from "next";
import Link from "next/link";
import { mscProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "MSc Projects",
};

export default function MscProjectsPage() {
  return (
    <div className="section-shell py-14 sm:py-20">
      <Link href="/work" className="text-sm text-accent hover:underline">
        ← Back to work
      </Link>

      <div className="mt-6 max-w-2xl">
        <p className="eyebrow">University of Liverpool</p>
        <h1 className="display mt-3 text-5xl text-ink sm:text-6xl">MSc Projects</h1>
        <p className="mt-5 text-ink-soft leading-relaxed">
          View-only PDFs from the MSc portfolio.
        </p>
      </div>

      <div className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {mscProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/msc/${project.slug}`}
            className="group grid gap-3 py-7 transition sm:grid-cols-[minmax(12rem,18rem)_1fr_auto] sm:items-center"
          >
            <p className="max-w-[18rem] text-xs leading-snug tracking-[0.12em] text-accent uppercase">
              {project.accent}
            </p>
            <div>
              <h2 className="text-xl font-medium text-ink group-hover:text-accent sm:text-2xl">
                {project.title}
              </h2>
            </div>
            <p className="text-sm font-medium text-accent sm:text-right">
              View {String.fromCharCode(8594)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
