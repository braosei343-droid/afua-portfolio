export type ArtPiece = {
  title: string;
  src: string;
  medium: string;
};

export const artMediums = [
  { slug: "paper-marbling", label: "Paper Marbling" },
  { slug: "pottery", label: "Pottery" },
  { slug: "pencil-sketches", label: "Pencil Sketches" },
  { slug: "print-pattern", label: "Print Pattern" },
  { slug: "acrylic-on-canvas", label: "Acrylic on Canvas" },
  { slug: "pointillism", label: "Pointillism" },
  { slug: "cross-hatching", label: "Cross Hatching" },
  { slug: "scorching", label: "Scorching" },
  { slug: "others", label: "Others" },
] as const;

export const artPieces: ArtPiece[] = [
  { title: "Asaase", src: "/images/art/paper-marbling/Asaase.jpg", medium: "paper-marbling" },
  { title: "Asaase Drifts", src: "/images/art/paper-marbling/Asaase-Drifts.jpg", medium: "paper-marbling" },
  { title: "Contrast", src: "/images/art/paper-marbling/Contrast.jpg", medium: "paper-marbling" },
  { title: "Earth Mixed", src: "/images/art/paper-marbling/Earth_Mixed.jpg", medium: "paper-marbling" },
  { title: "Mixed Haban", src: "/images/art/paper-marbling/Mixed-Haban.jpg", medium: "paper-marbling" },
  { title: "Mixed Haban II", src: "/images/art/paper-marbling/Mixed-Haban_2.jpg", medium: "paper-marbling" },
  { title: "Speckled Serenity", src: "/images/art/paper-marbling/Speckled-Serenity.jpg", medium: "paper-marbling" },
  { title: "Time Traces", src: "/images/art/paper-marbling/Time-Traces.jpg", medium: "paper-marbling" },
  { title: "Time Traces II", src: "/images/art/paper-marbling/Time-Traces_2.jpg", medium: "paper-marbling" },
  { title: "Uncertain Movements", src: "/images/art/paper-marbling/Uncertain-Movements.jpg", medium: "paper-marbling" },
  { title: "Uncertainty", src: "/images/art/paper-marbling/Uncertainty.jpg", medium: "paper-marbling" },
  { title: "Ntoaso I", src: "/images/art/pottery/Ntoaso_1.jpg", medium: "pottery" },
  { title: "Ntoaso II", src: "/images/art/pottery/Ntoaso_2.jpg", medium: "pottery" },
  { title: "Acrylic and Beads", src: "/images/art/pottery/Acrylic-and-Beads.jpg", medium: "pottery" },
  { title: "Adum, Kumasi", src: "/images/art/pencil-sketches/Adum_Kumasi.jpg", medium: "pencil-sketches" },
  { title: "Adum, Kumasi II", src: "/images/art/pencil-sketches/Adum_Kumasi-2.jpg", medium: "pencil-sketches" },
  { title: "Courtyard, Abrepo", src: "/images/art/pencil-sketches/Courtyard_Abrepo.jpg", medium: "pencil-sketches" },
  { title: "Flow Sea", src: "/images/art/print-pattern/Flow_Sea.jpg", medium: "print-pattern" },
  { title: "Ohemaa", src: "/images/art/print-pattern/Ohemaa.jpg", medium: "print-pattern" },
  { title: "Acrylic Study I", src: "/images/art/acrylic-on-canvas/IMG_5500.jpg", medium: "acrylic-on-canvas" },
  { title: "Acrylic Study II", src: "/images/art/acrylic-on-canvas/IMG_5508.jpg", medium: "acrylic-on-canvas" },
  { title: "Pointillism Study I", src: "/images/art/pointillism/IMG_5516.jpg", medium: "pointillism" },
  { title: "Pointillism Study II", src: "/images/art/pointillism/IMG_5519.jpg", medium: "pointillism" },
  { title: "Shoreline", src: "/images/art/cross-hatching/Shoreline.jpg", medium: "cross-hatching" },
  { title: "My Dida", src: "/images/art/scorching/My-Dida.jpg", medium: "scorching" },
  { title: "Mixed", src: "/images/art/others/Mixed.jpg", medium: "others" },
];
