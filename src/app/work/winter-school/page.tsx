import type { Metadata } from "next";
import Link from "next/link";
import { SlideShow } from "@/components/SlideShow";

export const metadata: Metadata = {
  title: "Winter School Generative AI",
};

export default function WinterSchoolPage() {
  return (
    <div className="section-shell py-10 sm:py-14">
      <Link href="/work" className="text-sm text-accent hover:underline">
        ← Back to work
      </Link>
      <div className="mt-6 max-w-3xl">
        <p className="eyebrow">University of Liverpool · 2025</p>
        <h1 className="display mt-3 text-4xl text-ink sm:text-5xl">
          Winter School Students Competition
        </h1>
        <p className="mt-4 text-ink-soft leading-relaxed">
          Exploring the integration of generative AI in architectural pedagogy — unveiling
          impacts on creativity through a collaborative student competition presentation.
        </p>
      </div>
      <div className="mt-10">
        <SlideShow />
      </div>
    </div>
  );
}
