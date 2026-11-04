import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { hamilton } from "@/data/hamilton";

export const metadata: Metadata = {
  title: "Net Zero Hamilton Square",
};

function Prose({ text }: { text: string }) {
  return (
    <div className="space-y-4">
      {text
        .split(/\n\n+/)
        .map((para) => para.trim())
        .filter(Boolean)
        .map((para) => (
          <p key={para.slice(0, 48)} className="text-ink-soft leading-relaxed whitespace-pre-wrap">
            {para}
          </p>
        ))}
    </div>
  );
}

export default function NetZeroHamiltonPage() {
  return (
    <article className="pb-20">
      <div className="section-shell py-10 sm:py-14">
        <Link href="/work" className="text-sm text-accent hover:underline">
          ← Back to work
        </Link>
        <p className="eyebrow mt-6">Featured project</p>
        <h1 className="display mt-3 max-w-4xl text-5xl text-ink sm:text-6xl">
          {hamilton.title}
        </h1>
        <p className="mt-3 text-lg text-ink-soft">{hamilton.subtitle}</p>
        <p className="mt-2 text-sm text-muted">{hamilton.meta}</p>
      </div>

      <div className="section-shell grid gap-4 sm:grid-cols-2">
        {hamilton.heroImages.map((image) => (
          <figure key={image.src} className="overflow-hidden rounded-sm border border-[var(--line)] bg-surface">
            <div className="relative aspect-[4/3]">
              <Image
                src={image.src}
                alt={image.caption}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <figcaption className="px-4 py-3 text-sm leading-relaxed text-muted">
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="section-shell mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-10">
          <section>
            <h2 className="display text-3xl text-ink">Project Overview</h2>
            <div className="mt-4">
              <Prose text={hamilton.overview} />
            </div>
          </section>
          <section>
            <h2 className="display text-3xl text-ink">Background and Study Area</h2>
            <div className="mt-4">
              <Prose text={hamilton.background} />
            </div>
          </section>
          <section>
            <h2 className="display text-3xl text-ink">Stakeholder Consultations and Site Meetings</h2>
            <div className="mt-4">
              <Prose text={hamilton.stakeholders} />
            </div>
          </section>
        </div>

        <section className="rounded-sm border border-[var(--line)] bg-[rgba(244,247,244,0.7)] p-6 sm:p-8">
          <h2 className="display text-3xl text-ink">My Role and Activities as a Volunteer</h2>
          <div className="mt-5">
            <Prose text={hamilton.role} />
          </div>
        </section>
      </div>

      <div className="section-shell mt-16">
        <h2 className="display text-4xl text-ink">Draft Energy Efficiency Guidance</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {hamilton.guidance.map((block) => (
            <section key={block.title} className="border-t border-[var(--line)] pt-5">
              <h3 className="text-lg font-medium text-ink">{block.title}</h3>
              <div className="mt-3 text-sm [&_p]:text-muted">
                <Prose text={block.body} />
              </div>
            </section>
          ))}
        </div>
      </div>

      <div className="section-shell mt-16 max-w-3xl">
        <h2 className="display text-4xl text-ink">Reflections</h2>
        <div className="mt-5">
          <Prose text={hamilton.reflections} />
        </div>
      </div>

      <div className="section-shell mt-16">
        <h2 className="display text-4xl text-ink">{hamilton.buildingStudy.title}</h2>
        <div className="mt-5 max-w-3xl">
          <Prose text={hamilton.buildingStudy.body} />
        </div>
        <div className="mt-8 columns-1 gap-3 sm:columns-2 lg:columns-3">
          {hamilton.buildingStudy.images.map((src) => (
            <div
              key={src}
              className="relative mb-3 aspect-[4/3] break-inside-avoid overflow-hidden rounded-sm border border-[var(--line)]"
            >
              <Image
                src={src}
                alt={`${hamilton.buildingStudy.title} documentation`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="section-shell mt-16 max-w-3xl border-t border-[var(--line)] pt-10">
        <h2 className="display text-3xl text-ink">Acknowledgements</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">{hamilton.acknowledgements}</p>
      </div>

      <div className="section-shell mt-12 max-w-3xl">
        <h2 className="display text-3xl text-ink">Bibliography</h2>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
          {hamilton.bibliography.map((item) => (
            <li key={item} className="border-t border-[var(--line)] pt-3">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
