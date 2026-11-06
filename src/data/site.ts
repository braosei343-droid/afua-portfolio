export const site = {
  name: "Afua Ampomah-Amoako",
  shortName: "Afua",
  title: "Architect · Educator · Climate Resilience",
  email: "ampomahamoako@gmail.com",
  phone: "+233 20 8566297",
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
