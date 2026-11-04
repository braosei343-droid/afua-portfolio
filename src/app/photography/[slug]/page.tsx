import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PhotoGrid } from "@/components/PhotoGrid";
import { getPhotoAlbum, photoAlbums } from "@/data/photography";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return photoAlbums.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const album = getPhotoAlbum(slug);
  return { title: album?.title ?? "Album" };
}

function AlbumFallback() {
  return (
    <div className="section-shell py-10 sm:py-14">
      <div className="h-4 w-28 animate-pulse rounded bg-[rgba(24,32,29,0.08)]" />
      <div className="mt-6 h-10 w-1/2 max-w-md animate-pulse rounded bg-[rgba(24,32,29,0.08)]" />
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-[4/3] animate-pulse rounded-sm bg-[rgba(24,32,29,0.06)]" />
        ))}
      </div>
    </div>
  );
}

async function PhotoAlbumContent({ params }: PageProps) {
  const { slug } = await params;
  const album = getPhotoAlbum(slug);
  if (!album) notFound();

  return (
    <div className="section-shell py-10 sm:py-14">
      <Link href="/photography" className="text-sm text-accent hover:underline">
        ← All albums
      </Link>
      <div className="mt-6 max-w-3xl">
        <p className="eyebrow">Album</p>
        <h1 className="display mt-3 text-4xl text-ink sm:text-5xl">{album.title}</h1>
        <p className="mt-4 text-ink-soft">{album.summary}</p>
        {album.caption ? (
          <div className="mt-6 space-y-3 border-t border-[var(--line)] pt-5 text-sm leading-relaxed text-muted">
            {album.caption.split("\n").filter(Boolean).map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        ) : null}
      </div>
      <div className="mt-10">
        <PhotoGrid images={album.images} />
      </div>
    </div>
  );
}

export default function PhotoAlbumPage({ params }: PageProps) {
  return (
    <Suspense fallback={<AlbumFallback />}>
      <PhotoAlbumContent params={params} />
    </Suspense>
  );
}
