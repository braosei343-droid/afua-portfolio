import type { Metadata } from "next";
import Link from "next/link";

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

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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

        <Link
          href="/work/msc"
          className="group rounded-sm border border-[var(--line)] bg-surface p-8 transition hover:border-accent sm:p-10 md:col-span-2 xl:col-span-1"
        >
          <p className="eyebrow">University of Liverpool</p>
          <h2 className="display mt-4 text-4xl text-ink group-hover:text-accent">MSc Projects</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Net Zero Energy Case Studies; NET ZERO CARBON ; A; Sustainable Students Accommodation;
            Climate Sensitive Shipping Containers; Designing for a Changing Climate.
          </p>
          <p className="mt-8 text-sm font-medium text-accent">
            Open projects {String.fromCharCode(8594)}
          </p>
        </Link>
      </div>
    </div>
  );
}
