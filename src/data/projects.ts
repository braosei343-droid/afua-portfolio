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
    summary:
      "Climate-responsive architectural strategies for a warming world, grounded in environmental analysis and resilient design thinking.",
    pdf: "/pdfs/msc/designing-for-a-changing-climate.pdf",
    accent: "Climate",
  },
  {
    slug: "final-container-presentation",
    title: "Final Container Presentation",
    summary:
      "A design presentation exploring adaptable container-based architecture within sustainable construction frameworks.",
    pdf: "/pdfs/msc/final-container-presentation.pdf",
    accent: "Design",
  },
  {
    slug: "net-zero-energy-case-studies",
    title: "Net Zero Energy Case Studies",
    summary:
      "Comparative study of nearly and net-zero energy buildings, with lessons for climate-responsive practice in Ghana and beyond.",
    pdf: "/pdfs/msc/net-zero-energy-case-studies.pdf",
    accent: "Energy",
  },
  {
    slug: "sustainable-construction-management",
    title: "Sustainable Construction Management",
    summary:
      "Methods and management approaches for lowering carbon impact across the construction process and project delivery.",
    pdf: "/pdfs/msc/sustainable-construction-management.pdf",
    accent: "Construction",
  },
  {
    slug: "sustainable-students-accommodation",
    title: "Sustainable Students Accommodation",
    summary:
      "Student housing design that balances comfort, community, and environmental performance for long-term resilience.",
    pdf: "/pdfs/msc/sustainable-students-accommodation.pdf",
    accent: "Housing",
  },
];

export const featuredWork = [
  {
    href: "/work/net-zero-hamilton",
    title: "Towards Net Zero Hamilton Square",
    eyebrow: "Featured · Wirral Council",
    summary:
      "Student volunteer reflections on documenting heritage buildings and drafting energy-efficiency guidance for a conservation area.",
  },
  {
    href: "/work#msc-projects",
    title: "MSc Academic Projects",
    eyebrow: "University of Liverpool",
    summary:
      "Five postgraduate projects spanning climate design, net-zero energy, sustainable construction, and student housing.",
  },
  {
    href: "/work/winter-school",
    title: "Winter School · Generative AI",
    eyebrow: "Students Competition",
    summary:
      "Exploring how generative AI intersects with architectural pedagogy, creativity, and studio culture.",
  },
] as const;

export function getMscProject(slug: string) {
  return mscProjects.find((p) => p.slug === slug);
}
