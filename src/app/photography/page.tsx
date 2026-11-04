import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { photoAlbums } from "@/data/photography";

export const metadata: Metadata = {
  title: "Photography",
};

export default function PhotographyPage() {
  return (
    <div className="section-shell py-14 sm:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow">Photography</p>
        <h1 className="display mt-3 text-5xl text-ink sm:text-6xl">Pictures</h1>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {photoAlbums.map((album) => (
          <Link
            key={album.slug}
            href={`/photography/${album.slug}`}
            className="group overflow-hidden rounded-sm border border-[var(--line)] bg-surface"
          >
            <div className="relative aspect-[16/11] overflow-hidden">
              <Image
                src={album.cover}
                alt={album.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-medium text-ink group-hover:text-accent">{album.title}</h2>
              {album.summary ? (
                <p className="mt-2 text-sm leading-relaxed text-muted">{album.summary}</p>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
