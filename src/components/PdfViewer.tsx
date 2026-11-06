"use client";

import { useEffect, useRef, useState } from "react";
import { MediaLoading } from "./MediaLoading";

type PdfViewerProps = {
  src: string;
  title: string;
};

type PdfDoc = {
  numPages: number;
  getPage: (n: number) => Promise<{
    getViewport: (params: { scale: number }) => { width: number; height: number };
    render: (params: {
      canvasContext: CanvasRenderingContext2D;
      viewport: { width: number; height: number };
      transform?: number[];
    }) => { promise: Promise<void> };
  }>;
};

export function PdfViewer({ src, title }: PdfViewerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState(0);
  const [renderedPages, setRenderedPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadAndRender() {
      setLoading(true);
      setError(null);
      setRenderedPages(0);
      setNumPages(0);

      const host = scrollRef.current;
      if (host) host.innerHTML = "";

      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = "/pdf-worker/pdf.worker.min.mjs";
        const doc = (await pdfjs.getDocument({
          url: src,
          disableAutoFetch: false,
          disableStream: false,
        }).promise) as unknown as PdfDoc;

        if (cancelled) return;
        setNumPages(doc.numPages);

        const container = scrollRef.current;
        if (!container) return;

        const containerWidth = Math.max(container.clientWidth - 24, 320);

        for (let pageNumber = 1; pageNumber <= doc.numPages; pageNumber += 1) {
          if (cancelled) return;

          const pdfPage = await doc.getPage(pageNumber);
          const unscaled = pdfPage.getViewport({ scale: 1 });
          const scale = Math.min(containerWidth / unscaled.width, 2);
          const viewport = pdfPage.getViewport({ scale });
          const outputScale = window.devicePixelRatio || 1;

          const wrapper = document.createElement("div");
          wrapper.className = "mx-auto mb-4 w-fit max-w-full last:mb-0";

          const canvas = document.createElement("canvas");
          canvas.className = "max-w-full shadow-2xl bg-white";
          canvas.width = Math.floor(viewport.width * outputScale);
          canvas.height = Math.floor(viewport.height * outputScale);
          canvas.style.width = `${viewport.width}px`;
          canvas.style.height = `${viewport.height}px`;

          const context = canvas.getContext("2d");
          if (!context) continue;

          const transform =
            outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined;

          await pdfPage.render({
            canvasContext: context,
            viewport,
            transform,
          }).promise;

          if (cancelled) return;
          wrapper.appendChild(canvas);
          container.appendChild(wrapper);
          setRenderedPages(pageNumber);
        }
      } catch {
        if (!cancelled) setError("Unable to open this document in the viewer.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadAndRender();
    return () => {
      cancelled = true;
      if (scrollRef.current) scrollRef.current.innerHTML = "";
    };
  }, [src]);

  const statusLabel = numPages
    ? loading
      ? `Loading ${renderedPages}/${numPages}…`
      : `${numPages} pages · scroll to view`
    : loading
      ? "Loading PDF…"
      : "—";

  return (
    <div
      className="overflow-hidden rounded-sm border border-[var(--line)] bg-[rgba(24,32,29,0.92)]"
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3 text-sm text-[#e7efe9]">
        <div className="min-w-0">
          <p className="truncate font-medium">{title}</p>
          <p className="text-xs text-white/55">Viewing only · download disabled in this portfolio</p>
        </div>
        <p className="tabular-nums text-white/70">{statusLabel}</p>
      </div>

      <div className="relative min-h-[min(70vh,720px)] bg-[#101613]">
        {loading && renderedPages === 0 && !error ? (
          <MediaLoading dark label="Loading PDF…" />
        ) : null}
        {loading && renderedPages > 0 ? (
          <p className="pointer-events-none absolute top-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/55 px-3 py-1.5 text-xs tracking-wide text-white/85 uppercase">
            Loading page {renderedPages} of {numPages}…
          </p>
        ) : null}
        {error ? (
          <p className="px-4 py-16 text-center text-sm text-red-200">{error}</p>
        ) : (
          <div
            ref={scrollRef}
            className="max-h-[min(80vh,900px)] min-h-[min(70vh,720px)] overflow-y-auto overscroll-contain p-3 sm:p-6"
          />
        )}
      </div>
    </div>
  );
}
