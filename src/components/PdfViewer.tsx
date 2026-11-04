"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type PdfViewerProps = {
  src: string;
  title: string;
};

export function PdfViewer({ src, title }: PdfViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pdfDoc, setPdfDoc] = useState<{ numPages: number; getPage: (n: number) => Promise<unknown> } | null>(null);
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rendering, setRendering] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = "/pdf-worker/pdf.worker.min.mjs";
        const doc = await pdfjs.getDocument({
          url: src,
          disableAutoFetch: false,
          disableStream: false,
        }).promise;
        if (cancelled) return;
        setPdfDoc(doc as unknown as { numPages: number; getPage: (n: number) => Promise<unknown> });
        setNumPages(doc.numPages);
        setPage(1);
      } catch {
        if (!cancelled) setError("Unable to open this document in the viewer.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [src]);

  const renderPage = useCallback(async () => {
    if (!pdfDoc || !canvasRef.current) return;
    setRendering(true);
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const pdfPage = (await pdfDoc.getPage(page)) as any;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (!context) return;

      const containerWidth = canvas.parentElement?.clientWidth || 800;
      const unscaled = pdfPage.getViewport({ scale: 1 });
      const scale = Math.min(containerWidth / unscaled.width, 2);
      const viewport = pdfPage.getViewport({ scale });

      const outputScale = window.devicePixelRatio || 1;
      canvas.width = Math.floor(viewport.width * outputScale);
      canvas.height = Math.floor(viewport.height * outputScale);
      canvas.style.width = `${viewport.width}px`;
      canvas.style.height = `${viewport.height}px`;

      const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined;

      await pdfPage.render({
        canvasContext: context,
        viewport,
        transform,
      }).promise;
    } finally {
      setRendering(false);
    }
  }, [pdfDoc, page]);

  useEffect(() => {
    renderPage();
  }, [renderPage]);

  useEffect(() => {
    const onResize = () => renderPage();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [renderPage]);

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
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={page <= 1 || loading}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="rounded-full border border-white/20 px-3 py-1.5 disabled:opacity-40"
          >
            Prev
          </button>
          <span className="tabular-nums text-white/70">
            {numPages ? `${page} / ${numPages}` : "—"}
          </span>
          <button
            type="button"
            disabled={!numPages || page >= numPages || loading}
            onClick={() => setPage((p) => Math.min(numPages, p + 1))}
            className="rounded-full border border-white/20 px-3 py-1.5 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>

      <div className="relative grid min-h-[60vh] place-items-center bg-[#101613] p-3 sm:p-6">
        {(loading || rendering) && (
          <p className="absolute top-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white/80">
            {loading ? "Loading document…" : "Rendering page…"}
          </p>
        )}
        {error ? (
          <p className="text-center text-sm text-red-200">{error}</p>
        ) : (
          <canvas ref={canvasRef} className="max-w-full shadow-2xl" />
        )}
      </div>
    </div>
  );
}
