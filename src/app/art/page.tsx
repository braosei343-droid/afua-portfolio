import type { Metadata } from "next";
import { ArtGallery } from "@/components/ArtGallery";

export const metadata: Metadata = {
  title: "Art",
};

export default function ArtPage() {
  return (
    <div className="section-shell py-14 sm:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow">Art</p>
        <h1 className="display mt-3 text-5xl text-ink sm:text-6xl">Art Explorations</h1>
      </div>
      <div className="mt-10">
        <ArtGallery />
      </div>
    </div>
  );
}
