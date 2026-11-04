import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="section-shell py-14 sm:py-20">
      <div className="max-w-3xl">
        <p className="eyebrow">About</p>
        <h1 className="display mt-3 text-5xl text-ink sm:text-6xl">
          Architect. Educator. Climate thinker.
        </h1>
        <p className="mt-3 text-sm text-muted">
          Afua Ampomah-Amoako <span className="text-ink-soft">(née: Afua Boatemaa-Oti)</span>
        </p>
        <div className="prose-site mt-8 space-y-5">
          <p>
            I am a professional Architect with experience in practice and academia. From 2012 to
            2021 as a practicing architect, my projects encompassed residential enclave
            developments, commercial and hospitality projects. I have been a built environment
            faculty member at Accra Technical University since 2021. I contributed a chapter to
            Docomomo International’s book on Modernism in Africa.
          </p>
          <p>
            I am a Chevening Scholarship Award recipient which funded my MSc in Climate Resilience
            and Environmental Sustainability in Architecture at the University of Liverpool. In
            contributing to a climate resilient Ghana, I co-founded{" "}
            <a
              href={site.socials.ngo}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-accent underline-offset-2 hover:underline"
            >
              Nyansapo Sustainability Initiative
            </a>{" "}
            to foster a deep understanding of sustainable built environments through
            industry-academia partnerships and mentorships. I have keen interests in fine art,
            designing and culinary skills.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <section>
          <p className="eyebrow">Education</p>
          <ul className="mt-5 space-y-6">
            {[
              {
                school: "University of Liverpool",
                meta: "Department of Architecture · 2024–2025",
                detail:
                  "MSc. Climate Resilience and Environmental Sustainability in Architecture. Thesis: From Vernacular to Net-Zero Energy: A Case Study of Passive Strategies in Accra’s Nearly Net-Zero Energy Building as a Model for Climate-Responsive Architecture in Ghana.",
              },
              {
                school: "KNUST",
                meta: "Department of Architecture · 2010–2013",
                detail:
                  "Master of Architecture. Thesis: Veterinary Medical Centre Design; Analysis of Spatial Requirements in Ghana.",
              },
              {
                school: "KNUST",
                meta: "Department of Architecture · 2006–2010",
                detail:
                  "Bachelor of Science, Architecture — Second Class Upper Division. Dissertation: Fire Safety and the Egress System of Students Halls of Residence, Kwame Nkrumah University of Science and Technology, Kumasi.",
              },
            ].map((item) => (
              <li key={item.detail} className="border-t border-[var(--line)] pt-4">
                <p className="font-medium text-ink">{item.school}</p>
                <p className="mt-1 text-xs tracking-wide text-accent uppercase">{item.meta}</p>
                <p className="mt-2 text-sm text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <p className="eyebrow">Professional membership</p>
          <ul className="mt-5 space-y-6">
            <li className="border-t border-[var(--line)] pt-4 text-sm leading-relaxed text-ink-soft">
              Ghana Institute of Architects — Associate Member (2016)
            </li>
          </ul>

          <p className="eyebrow mt-10">Practice & roles</p>
          <ul className="mt-5 space-y-6">
            {[
              {
                title: "Co-Founder — Nyansapo Sustainability Initiative (NYANEX)",
                detail:
                  "Promoting a climate resilient built environment, low carbon materials and renewable energy integration.",
              },
              {
                title: "Assistant Lecturer — Accra Technical University, Accra",
                detail:
                  "February 2026 – present. Faculty of built environment. Teaching, research and mentoring students; Development of syllabus, examination and grading.",
              },
              {
                title: "Project Architect — Magear Construction Works, Accra",
                detail:
                  "1st August 2021 – present. Design and preparation of permit drawings; Construction supervision of residential and commercial projects.",
              },
              {
                title: "Architect — Architectural and Engineering Services Limited (AESL), Accra",
                detail:
                  "June 2016 – May 2021. Preparation of drawings, site inspections, documentation and correspondence with other consultants; Saglemi Housing project supervision.",
              },
              {
                title: "Junior Architect — KEY Architectural Company, Accra",
                detail:
                  "March 2015 – April 2016. Measured drawing; Inspecting construction works; Preparing site meeting minutes, weekly reports and other correspondence.",
              },
            ].map((item) => (
              <li key={item.title} className="border-t border-[var(--line)] pt-4">
                <p className="text-sm font-medium text-ink">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-16 max-w-3xl">
        <p className="eyebrow">Research experience</p>
        <ul className="mt-5 space-y-5 text-sm leading-relaxed text-ink-soft">
          <li className="border-t border-[var(--line)] pt-4">
            <span className="font-medium text-ink">2013 — Journal publication</span>
            <br />
            <em>
              An Audit of the Egress System in Multi-Storey Annexes of Four Halls of Residence at
              KNUST, Kumasi, Ghana
            </em>
            <br />
            EA Botchway, A Boatemaa-Oti ·{" "}
            <a
              href="https://doi.org/10.4314/just.v32i3.6"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 break-all font-medium text-accent underline underline-offset-2 decoration-accent/50 transition hover:decoration-accent"
            >
              10.43:14/just.v32i3.6
              <span aria-hidden="true" className="shrink-0 text-[0.7em] no-underline">↗</span>
            </a>
          </li>
          <li className="border-t border-[var(--line)] pt-4">
            <span className="font-medium text-ink">2024 — Book chapter</span>
            <br />
            Docomomo International,{" "}
            <a
              href="https://birkhauser.com/en/book/9783035628357"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-accent underline underline-offset-2 decoration-accent/50 transition hover:decoration-accent"
            >
              <em>Modernism in Africa</em>
              <span aria-hidden="true" className="ml-1 text-[0.7em] no-underline">↗</span>
            </a>{" "}
            — The Architecture of Angola, Ghana, Mozambique, Nigeria, Rwanda, Sudan, Tanzania,
            Uganda.
            <br />
            Chapter: GAEC Clubhouse, Kwabenya (1960–1966).
            <br />
            <a
              href="https://drive.google.com/file/d/16IKsW6HlPXM320D7vxn-hzN4rcxHnXOW/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex max-w-full items-center gap-1 break-all font-medium text-accent underline underline-offset-2 decoration-accent/50 transition hover:decoration-accent"
            >
              https://drive.google.com/file/d/16IKsW6HlPXM320D7vxn-hzN4rcxHnXOW/view?usp=sharing
              <span aria-hidden="true" className="shrink-0 text-[0.7em] no-underline">↗</span>
            </a>
          </li>
          <li className="border-t border-[var(--line)] pt-4">
            <span className="font-medium text-ink">2025 — Conference presentation</span>
            <br />
            International Conference on Engineering, Science and Urban Sustainability (ICESUS):{" "}
            <em>
              Zonal and Regional Distribution Patterns of Accidental Fire-Related Events in Ghana: A
              Retrospective Analysis
            </em>
            <br />
            Joana Agyekum-Sah, Justice Agbevade, Afua Ampomah-Amoako ·{" "}
            <a
              href="https://doi.org/10.2991/978-94-6463-970-4_51"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 break-all font-medium text-accent underline underline-offset-2 decoration-accent/50 transition hover:decoration-accent"
            >
              10.2991/978-94-6463-970-4_51
              <span aria-hidden="true" className="shrink-0 text-[0.7em] no-underline">↗</span>
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-16 max-w-3xl">
        <p className="eyebrow">Award & scholarship</p>
        <ul className="mt-5 space-y-4 text-sm leading-relaxed text-ink-soft">
          <li className="border-t border-[var(--line)] pt-4">
            Chevening Scholarship — 2024/2025 Cohort, University of Liverpool
          </li>
        </ul>
      </section>

      <section className="mt-16 max-w-3xl">
        <p className="eyebrow">Volunteering & part-time employment</p>
        <ul className="mt-5 space-y-5 text-sm leading-relaxed text-ink-soft">
          <li className="border-t border-[var(--line)] pt-4">
            <span className="font-medium text-ink">Panel Member</span> — Chevening Speaker Series:
            Our Rivers, Our Future: Illegal Mining, Flooding and the Urgent Case for Environmental
            Accountability — Chevening Association of Ghana, Accra (October 2026).
          </li>
          <li className="border-t border-[var(--line)] pt-4">
            <span className="font-medium text-ink">Student Volunteer</span> — Wirral Council,
            Liverpool, February 2025 – June 2025. Project: A Net Zero Hamilton Square. Mapping out
            conservation area, study of target buildings and drafting Energy Efficiency Guidance for
            historic buildings.
          </li>
          <li className="border-t border-[var(--line)] pt-4">
            <span className="font-medium text-ink">IELTS Examination Invigilator</span> (Part Time) —
            International House Test Assessment, Liverpool and Manchester Area (Mar–Oct 2025).
          </li>
          <li className="border-t border-[var(--line)] pt-4">
            <span className="font-medium text-ink">Participant</span> — University of Liverpool
            Winter School Students Competition: Exploring the Integration of Generative AI in
            Architectural Pedagogy: Unveiling the Impacts on Creativity (2025).
          </li>
          <li className="border-t border-[var(--line)] pt-4">
            <span className="font-medium text-ink">Exhibition contributions</span> — Proximity
            Photography Exhibition, Open Eye Gallery, Liverpool (2025); University of Liverpool
            Department of Architecture Students Exhibition (2025).
          </li>
          <li className="border-t border-[var(--line)] pt-4">
            <span className="font-medium text-ink">Resource Person</span> — Puoriyela Wood Works:
            TVET Practical Training of Woodworkers in using AutoCAD and SketchUp to boost
            productivity, Wa, Upper West, Ghana (December 2023).
          </li>
          <li className="border-t border-[var(--line)] pt-4">
            <span className="font-medium text-ink">Intern/Research Assistant</span> — KNUST
            Development Office: Research on the requirements and design of KNUST Veterinary
            Hospital (May 2012 – August 2012).
          </li>
        </ul>
      </section>

      <section className="mt-16 max-w-3xl">
        <p className="eyebrow">Interests</p>
        <p className="mt-4 border-t border-[var(--line)] pt-4 text-sm text-ink-soft">
          Sketching, painting and cooking.
        </p>
      </section>

      <div className="mt-14 flex flex-wrap gap-3">
        <Link
          href="/work"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-[#f4f8f6]"
        >
          See selected work
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium text-ink"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
