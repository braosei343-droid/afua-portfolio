import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PdfViewer } from "@/components/PdfViewer";
import { getMscProject, mscProjects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return mscProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getMscProject(slug);
  return {
    title: project?.title ?? "MSc Project",
  };
}

function ProjectFallback() {
  return (
    <div className="section-shell py-10 sm:py-14">
      <div className="h-4 w-40 animate-pulse rounded bg-[rgba(24,32,29,0.08)]" />
      <div className="mt-6 h-10 w-2/3 max-w-xl animate-pulse rounded bg-[rgba(24,32,29,0.08)]" />
      <div className="mt-8 min-h-[60vh] animate-pulse rounded-sm bg-[rgba(24,32,29,0.06)]" />
    </div>
  );
}

async function MscProjectContent({ params }: PageProps) {
  const { slug } = await params;
  const project = getMscProject(slug);
  if (!project) notFound();

  return (
    <div className="section-shell py-10 sm:py-14">
      <Link href="/work#msc-projects" className="text-sm text-accent hover:underline">
        ← Back to MSc projects
      </Link>
      <div className="mt-6 max-w-3xl">
        <p className="eyebrow">{project.accent}</p>
        <h1 className="display mt-3 text-4xl text-ink sm:text-5xl">{project.title}</h1>
        <p className="mt-4 text-ink-soft">{project.summary}</p>
      </div>
      <div className="mt-8">
        <PdfViewer src={project.pdf} title={project.title} />
      </div>
    </div>
  );
}

export default function MscProjectPage({ params }: PageProps) {
  return (
    <Suspense fallback={<ProjectFallback />}>
      <MscProjectContent params={params} />
    </Suspense>
  );
}
