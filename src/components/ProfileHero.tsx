"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { SmartImage } from "./SmartImage";

type ProfileHeroProps = {
  portraitAlt: string;
  children: ReactNode;
};

export function ProfileHero({ portraitAlt, children }: ProfileHeroProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const [textHeight, setTextHeight] = useState<number | null>(null);

  useEffect(() => {
    const node = textRef.current;
    if (!node) return;

    const update = () => setTextHeight(node.getBoundingClientRect().height);

    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const framed =
    textHeight && textHeight > 0
      ? { height: textHeight, width: Math.min((textHeight * 740) / 1514, 340) }
      : { aspectRatio: "740 / 1514" as const, width: "100%", maxWidth: 340 };

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_auto] lg:gap-14">
      <div ref={textRef} className="max-w-3xl">
        {children}
      </div>

      <div className="relative mx-auto w-full max-w-[340px] lg:mx-0 lg:w-auto">
        <div className="relative mx-auto" style={framed}>
          <div className="pointer-events-none absolute -inset-3 rounded-[1.6rem] bg-[radial-gradient(circle_at_30%_20%,rgba(196,180,154,0.35),transparent_55%)]" />
          <div className="relative h-full w-full overflow-hidden rounded-[1.2rem] border border-[var(--line)] shadow-[0_24px_60px_rgba(24,32,29,0.14)]">
            <SmartImage
              src="/images/hero/pix.jpg"
              alt={portraitAlt}
              fill
              priority
              className="object-contain object-top"
              sizes="(max-width: 1024px) 80vw, 28vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
