import Image from "next/image";
import Link from "next/link";
import { featuredWork } from "@/data/projects";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="hero-glow absolute top-[-10%] right-[-5%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(37,86,74,0.18),transparent_70%)]" />
          <div className="absolute bottom-[-20%] left-[-10%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(196,180,154,0.25),transparent_70%)]" />
        </div>

        <div className="section-shell relative grid min-h-[calc(100vh-5.5rem)] items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-0">
          <div className="reveal max-w-xl">
            <p className="eyebrow">Portfolio</p>
            <h1 className="display mt-4 text-[clamp(3.4rem,9vw,6.4rem)] text-ink">
              {site.name}
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
              {site.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent transition hover:bg-accent-soft"
              >
                View work
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[var(--line)] bg-[rgba(247,249,247,0.55)] px-6 py-3 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-[420px] lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(196,180,154,0.35),transparent_55%)]" />
            <div className="hero-portrait relative aspect-[3/5] overflow-hidden rounded-[1.4rem] border border-[var(--line)] shadow-[0_30px_80px_rgba(24,32,29,0.18)]">
              <Image
                src="/images/hero/pix.jpg"
                alt={`${site.name} portrait`}
                fill
                priority
                className="object-cover object-[50%_18%]"
                sizes="(max-width: 1024px) 90vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(24,32,29,0.35)] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[rgba(244,247,244,0.45)] py-20">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="eyebrow">Selected paths</p>
            <h2 className="display mt-3 text-4xl text-ink sm:text-5xl">
              Practice, research, and making
            </h2>
            <p className="mt-4 text-ink-soft">
              I have keen interests in fine art, designing and culinary skills.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {featuredWork.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group border-t border-[var(--line)] pt-6 transition hover:border-accent"
              >
                <p className="eyebrow">{item.eyebrow}</p>
                <h3 className="display mt-3 text-3xl text-ink transition group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
                <p className="mt-5 text-sm font-medium text-accent">
                  Explore {String.fromCharCode(8594)}
                </p>
                <span className="sr-only">Feature {index + 1}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
