import type { Metadata } from "next";
import { ArtGallery } from "@/components/ArtGallery";

export const metadata: Metadata = {
  title: "Art",
};

export default function ArtPage() {
  return (
    <div className="section-shell py-14 sm:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow">Art explorations</p>
        <h1 className="display mt-3 text-5xl text-ink sm:text-6xl">
          Material, mark, and movement
        </h1>
        <p className="mt-5 text-ink-soft">
          Paper marbling, pottery, pencil sketches, print patterns, and more — a studio practice
          that sits beside architecture and climate research.
        </p>
      </div>
      <div className="mt-10">
        <ArtGallery />
      </div>
    </div>
  );
}
