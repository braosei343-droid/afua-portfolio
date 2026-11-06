export type MscProject = {
  slug: string;
  title: string;
  summary: string;
  pdf: string;
  accent: string;
};

export const mscProjects: MscProject[] = [
  {
    slug: "net-zero-energy-case-studies",
    title: "Net Zero Energy Case Studies",
    summary: "MSc project — view-only PDF.",
    pdf: "/pdfs/msc/net-zero-energy-case-studies.pdf",
    accent: "Buildings and Renewable Energy",
  },
  {
    slug: "sustainable-construction-management",
    title: "NET ZERO CARBON",
    summary: "MSc project — view-only PDF.",
    pdf: "/pdfs/msc/sustainable-construction-management.pdf",
    accent: "Construction",
  },
  {
    slug: "sustainable-students-accommodation",
    title: "Sustainable Students Accommodation",
    summary: "MSc project — view-only PDF.",
    pdf: "/pdfs/msc/sustainable-students-accommodation.pdf",
    accent: "Sustainable Environmental Design",
  },
  {
    slug: "final-container-presentation",
    title: "Climate Sensitive Shipping Containers",
    summary: "MSc project — view-only PDF.",
    pdf: "/pdfs/msc/final-container-presentation.pdf",
    accent: "Passive Strategies and Design",
  },
  {
    slug: "designing-for-a-changing-climate",
    title: "Designing for a Changing Climate",
    summary: "MSc project — view-only PDF.",
    pdf: "/pdfs/msc/designing-for-a-changing-climate.pdf",
    accent: "Overheating and Future Climates.",
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
    href: "/work/msc",
    title: "MSc Academic Projects",
    eyebrow: "University of Liverpool",
    summary:
      "Net Zero Energy Case Studies; NET ZERO CARBON; Sustainable Students Accommodation; Climate Sensitive Shipping Containers; Designing for a Changing Climate.",
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
