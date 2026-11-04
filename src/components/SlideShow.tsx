"use client";

import Image from "next/image";
import { useState } from "react";

const slides = Array.from({ length: 18 }, (_, i) => `/images/winter-school/slide${i + 1}.jpg`);

export function SlideShow() {
  const [index, setIndex] = useState(0);

  return (
    <div className="overflow-hidden rounded-sm border border-[var(--line)] bg-surface">
      <div className="relative aspect-[16/10] w-full bg-[rgba(24,32,29,0.06)]">
        <Image
          src={slides[index]}
          alt={`Winter School slide ${index + 1}`}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 960px"
          priority
        />
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-[var(--line)] px-4 py-3">
        <button
          type="button"
          className="rounded-full border border-[var(--line)] px-3 py-1.5 text-sm text-ink-soft disabled:opacity-40"
          disabled={index === 0}
          onClick={() => setIndex((v) => Math.max(0, v - 1))}
        >
          Prev
        </button>
        <p className="text-sm text-muted tabular-nums">
          {index + 1} / {slides.length}
        </p>
        <button
          type="button"
          className="rounded-full border border-[var(--line)] px-3 py-1.5 text-sm text-ink-soft disabled:opacity-40"
          disabled={index === slides.length - 1}
          onClick={() => setIndex((v) => Math.min(slides.length - 1, v + 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
}
