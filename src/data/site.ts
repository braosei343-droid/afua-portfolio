export const site = {
  name: "Afua Ampomah-Amoako",
  shortName: "Afua",
  title: "Architect · Educator",
  /** Server-only fallback for contact form delivery — not shown on the site. */
  email: "ampomahamoako@gmail.com",
  location: "Accra, Ghana",
  tagline:
    "I am a professional Architect with experience in practice and academia.",
  socials: {
    linkedin: "https://www.linkedin.com/in/afua-a-76464015a/",
    ngo: "https://www.nyansaposustainabilityinitiative.org",
    ngoLabel: "Nyansapo Sustainability Initiative",
  },
} as const;

export const navItems = [
  { href: "/about", label: "Profile" },
  { href: "/work", label: "Work" },
  { href: "/art", label: "Art" },
  { href: "/photography", label: "Photography" },
  { href: "/contact", label: "Contact" },
] as const;
