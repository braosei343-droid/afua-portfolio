"use client";

import { useState } from "react";
import { Lightbox } from "./Lightbox";
import { SmartImage } from "./SmartImage";

type PhotoGridProps = {
  images: { src: string; alt: string }[];
};

export function PhotoGrid({ images }: PhotoGridProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-[var(--line)] bg-surface"
            onClick={() => setActive(index)}
          >
            <SmartImage
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <Lightbox
          images={images}
          index={active}
          onClose={() => setActive(null)}
          onPrev={() => setActive((i) => (i === null ? 0 : (i + images.length - 1) % images.length))}
          onNext={() => setActive((i) => (i === null ? 0 : (i + 1) % images.length))}
        />
      )}
    </>
  );
}
