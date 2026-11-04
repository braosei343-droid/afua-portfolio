"use client";

import Image from "next/image";
import { useEffect } from "react";

type LightboxProps = {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const current = images[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  if (!current) return null;

  return (
    <div className="lightbox-backdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div
        className="relative flex w-full max-w-5xl flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-black/30">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>
        <div className="flex w-full items-center justify-between gap-3 text-sm text-[#e8efe9]">
          <p className="min-w-0 truncate">{current.alt}</p>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={onPrev}
              className="rounded-full border border-white/25 px-3 py-1.5 hover:bg-white/10"
            >
              Prev
            </button>
            <span className="tabular-nums opacity-70">
              {index + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={onNext}
              className="rounded-full border border-white/25 px-3 py-1.5 hover:bg-white/10"
            >
              Next
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-white/15 px-3 py-1.5 hover:bg-white/25"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
