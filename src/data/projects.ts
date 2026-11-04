export type MscProject = {
  slug: string;
  title: string;
  summary: string;
  pdf: string;
  accent: string;
};

export const mscProjects: MscProject[] = [
  {
    slug: "designing-for-a-changing-climate",
    title: "Designing for a Changing Climate",
    summary: "MSc project — view-only PDF.",
    pdf: "/pdfs/msc/designing-for-a-changing-climate.pdf",
    accent: "Climate",
  },
  {
    slug: "final-container-presentation",
    title: "Final Container Presentation",
    summary: "MSc project — view-only PDF.",
    pdf: "/pdfs/msc/final-container-presentation.pdf",
    accent: "Design",
  },
  {
    slug: "net-zero-energy-case-studies",
    title: "Net Zero Energy Case Studies",
    summary: "MSc project — view-only PDF.",
    pdf: "/pdfs/msc/net-zero-energy-case-studies.pdf",
    accent: "Energy",
  },
  {
    slug: "sustainable-construction-management",
    title: "Sustainable Construction Management",
    summary: "MSc project — view-only PDF.",
    pdf: "/pdfs/msc/sustainable-construction-management.pdf",
    accent: "Construction",
  },
  {
    slug: "sustainable-students-accommodation",
    title: "Sustainable Students Accommodation",
    summary: "MSc project — view-only PDF.",
    pdf: "/pdfs/msc/sustainable-students-accommodation.pdf",
    accent: "Housing",
  },
];

export const featuredWork = [
  {
    href: "/work/net-zero-hamilton",
    title: "Towards a Net Zero Hamilton Square",
    eyebrow: "Featured · Wirral Council",
    summary:
      "An MSc. student volunteer’s reflections — mapping out conservation area, study of target buildings and drafting Energy Efficiency Guidance for historic buildings.",
  },
  {
    href: "/work#msc-projects",
    title: "MSc Academic Projects",
    eyebrow: "University of Liverpool",
    summary:
      "Designing for a Changing Climate; Final Container Presentation; Net Zero Energy Case Studies; Sustainable Construction Management; Sustainable Students Accommodation.",
  },
  {
    href: "/work/winter-school",
    title: "Winter School Students Competition",
    eyebrow: "Generative AI",
    summary:
      "Exploring the Integration of Generative AI in Architectural Pedagogy: Unveiling the Impacts on Creativity.",
  },
] as const;

export function getMscProject(slug: string) {
  return mscProjects.find((p) => p.slug === slug);
}
