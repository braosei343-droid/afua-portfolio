"use client";

import { useMemo, useState } from "react";
import { artMediums, artPieces } from "@/data/art";
import { Lightbox } from "./Lightbox";
import { SmartImage } from "./SmartImage";

export function ArtGallery() {
  const [medium, setMedium] = useState<string>("all");
  const [active, setActive] = useState<number | null>(null);

  const filtered = useMemo(
    () => (medium === "all" ? artPieces : artPieces.filter((p) => p.medium === medium)),
    [medium],
  );

  const lightboxImages = filtered.map((p) => ({ src: p.src, alt: p.title }));

  return (
    <div>
      <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2">
        <button
          type="button"
          className="filter-chip shrink-0"
          data-active={medium === "all"}
          onClick={() => setMedium("all")}
        >
          All
        </button>
        {artMediums.map((m) => (
          <button
            key={m.slug}
            type="button"
            className="filter-chip shrink-0"
            data-active={medium === m.slug}
            onClick={() => setMedium(m.slug)}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((piece, index) => (
          <button
            key={piece.src}
            type="button"
            className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-sm border border-[var(--line)] bg-surface text-left transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(24,32,29,0.12)]"
            onClick={() => setActive(index)}
          >
            <div className="relative aspect-[4/5] w-full">
              <SmartImage
                src={piece.src}
                alt={piece.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="px-3 py-3">
              <p className="text-sm font-medium text-ink">{piece.title}</p>
              <p className="mt-1 text-xs tracking-wide text-muted uppercase">
                {artMediums.find((m) => m.slug === piece.medium)?.label}
              </p>
            </div>
          </button>
        ))}
      </div>

      {active !== null && (
        <Lightbox
          images={lightboxImages}
          index={active}
          onClose={() => setActive(null)}
          onPrev={() => setActive((i) => (i === null ? 0 : (i + filtered.length - 1) % filtered.length))}
          onNext={() => setActive((i) => (i === null ? 0 : (i + 1) % filtered.length))}
        />
      )}
    </div>
  );
}
