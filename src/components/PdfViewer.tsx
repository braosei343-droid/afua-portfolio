"use client";

import { useEffect, useRef, useState } from "react";

type PdfViewerProps = {
  src: string;
  title: string;
};

type PdfPage = {
  getViewport: (params: { scale: number }) => { width: number; height: number };
  render: (params: {
    canvasContext: CanvasRenderingContext2D;
    viewport: { width: number; height: number };
    transform?: number[];
  }) => { promise: Promise<void> };
};

type PdfDoc = {
  numPages: number;
  getPage: (n: number) => Promise<PdfPage>;
  destroy?: () => Promise<void>;
};

export function PdfViewer({ src, title }: PdfViewerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState(0);
  const [readyPages, setReadyPages] = useState(0);
  const [docLoading, setDocLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    let observer: IntersectionObserver | null = null;
    let doc: PdfDoc | null = null;
    const rendered = new Set<number>();

    async function renderPage(
      pdfPage: PdfPage,
      canvas: HTMLCanvasElement,
      containerWidth: number,
    ) {
      const unscaled = pdfPage.getViewport({ scale: 1 });
      const isMobile = window.matchMedia("(max-width: 640px)").matches;
      const maxScale = isMobile ? 1.25 : 1.75;
      const scale = Math.min(containerWidth / unscaled.width, maxScale);
      const viewport = pdfPage.getViewport({ scale });
      const outputScale = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);

      canvas.width = Math.floor(viewport.width * outputScale);
      canvas.height = Math.floor(viewport.height * outputScale);
      canvas.style.width = `${viewport.width}px`;
      canvas.style.height = `${viewport.height}px`;

      const context = canvas.getContext("2d");
      if (!context) return;

      const transform =
        outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined;

      await pdfPage.render({
        canvasContext: context,
        viewport,
        transform,
      }).promise;
    }

    async function loadDocument() {
      setDocLoading(true);
      setError(null);
      setReadyPages(0);
      setNumPages(0);

      const host = scrollRef.current;
      if (host) host.innerHTML = "";

      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = "/pdf-worker/pdf.worker.min.mjs";

        doc = (await pdfjs.getDocument({
          url: src,
          disableAutoFetch: false,
          disableStream: false,
          // Prefer range requests so phones can start sooner
          disableRange: false,
        }).promise) as unknown as PdfDoc;

        if (cancelled || !scrollRef.current) return;

        setNumPages(doc.numPages);
        setDocLoading(false);

        const container = scrollRef.current;
        const containerWidth = Math.max(container.clientWidth - 24, 280);

        // Placeholder slots so users can scroll immediately
        for (let pageNumber = 1; pageNumber <= doc.numPages; pageNumber += 1) {
          const slot = document.createElement("div");
          slot.dataset.page = String(pageNumber);
          slot.className =
            "mx-auto mb-4 flex min-h-[40vh] w-full max-w-full items-center justify-center last:mb-0";
          slot.innerHTML =
            '<p class="text-xs text-white/40">Page ' + pageNumber + "</p>";
          container.appendChild(slot);
        }

        observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (!entry.isIntersecting || cancelled || !doc) continue;
              const el = entry.target as HTMLElement;
              const pageNumber = Number(el.dataset.page);
              if (!pageNumber || rendered.has(pageNumber)) continue;
              rendered.add(pageNumber);

              void (async () => {
                try {
                  const pdfPage = await doc!.getPage(pageNumber);
                  if (cancelled) return;

                  // Approximate height from first unscaled pass for layout stability
                  const canvas = document.createElement("canvas");
                  canvas.className = "max-w-full bg-white shadow-2xl";
                  await renderPage(pdfPage, canvas, containerWidth);
                  if (cancelled) return;

                  el.className = "mx-auto mb-4 w-fit max-w-full last:mb-0";
                  el.replaceChildren(canvas);
                  setReadyPages((n) => n + 1);
                  observer?.unobserve(el);
                } catch {
                  el.innerHTML =
                    '<p class="text-xs text-red-200">Could not render page ' +
                    pageNumber +
                    "</p>";
                }
              })();
            }
          },
          {
            root: container,
            // Start loading a bit before the page enters view
            rootMargin: "200px 0px",
            threshold: 0.01,
          },
        );

        for (const child of Array.from(container.children)) {
          observer.observe(child);
        }
      } catch {
        if (!cancelled) {
          setError("Unable to open this document in the viewer.");
          setDocLoading(false);
        }
      }
    }

    void loadDocument();

    return () => {
      cancelled = true;
      observer?.disconnect();
      void doc?.destroy?.();
      if (scrollRef.current) scrollRef.current.innerHTML = "";
    };
  }, [src]);

  const status = error
    ? null
    : docLoading
      ? "Opening document…"
      : readyPages < numPages
        ? `Ready · ${readyPages}/${numPages} pages rendered`
        : `${numPages} pages · scroll to view`;

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
        <p className="tabular-nums text-white/70">{status ?? "—"}</p>
      </div>

      <div className="relative bg-[#101613]">
        {docLoading && (
          <p className="pointer-events-none absolute top-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white/80">
            Opening document…
          </p>
        )}
        {error ? (
          <p className="px-4 py-16 text-center text-sm text-red-200">{error}</p>
        ) : (
          <div
            ref={scrollRef}
            className="max-h-[min(80vh,900px)] overflow-y-auto overscroll-contain p-3 sm:p-6"
          />
        )}
      </div>
    </div>
  );
}
