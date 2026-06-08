"use client";

import { useState } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "SmartHire",
    tagline: "AI Voice Recruitment Platform",
    desc: "Full-stack SaaS platform that conducts AI-driven voice interviews in real time. Supports concurrent interview sessions, dynamic question generation, and structured candidate evaluation workflows.",
    github: "https://github.com/KambhampatiAdvaith/SmartHire",
    image: "/projects/project1.png",
    accent: "#6382ff",
  },
  {
    id: 2,
    title: "Cardiac Risk Prediction in Infants",
    tagline: "Clinical Machine Learning Pipeline",
    desc: "End-to-end machine learning system for predicting infant cardiac arrest using ICU data. Integrated SHAP-based explainability to make model predictions interpretable for healthcare professionals.",
    github: "https://github.com/KambhampatiAdvaith/IIITK",
    image: "/projects/project2.png",
    accent: "#8b5cf6",
  },
  {
    id: 3,
    title: "Veritas Agent",
    tagline: "Deepfake Credibility Assessment Agent",
    desc: "AI-powered forensic analysis platform for assessing video authenticity and detecting deepfake manipulation. Combines computer vision and multimodal AI techniques to provide credibility scores, explainable evidence, and real-time analysis.",
    github: "https://github.com/KambhampatiAdvaith/Veritas",
    image: "/projects/project3.png",
    accent: "#22d3ee",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="projects"
      style={{
        padding: "7rem 0",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          padding: "0 2.5rem",
        }}
      >
        <div style={{ marginBottom: "4rem" }}>
          <div className="section-label reveal">Projects</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              className={`proj-card reveal d${(i % 4) + 1}`}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "grid",
                gridTemplateColumns:
                  i % 2 === 0 ? "1.1fr 1fr" : "1fr 1.1fr",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                overflow: "hidden",
                transition: "all .3s ease",
                borderColor:
                  hovered === p.id
                    ? `${p.accent}50`
                    : "var(--border)",
              }}
            >
              {/* IMAGE */}

              <div
                style={{
                  order: i % 2 === 0 ? 0 : 1,
                  minHeight: "340px",
                  background: "#070912",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1rem",
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "12px",
                  }}
                />
              </div>

              {/* CONTENT */}

              <div
                style={{
                  order: i % 2 === 0 ? 1 : 0,
                  padding: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "1.8rem",
                    fontWeight: 800,
                    marginBottom: ".5rem",
                    color: "var(--text)",
                  }}
                >
                  {p.title}
                </h3>

                <div
                  style={{
                    color: p.accent,
                    fontSize: ".95rem",
                    fontWeight: 600,
                    marginBottom: "1rem",
                  }}
                >
                  {p.tagline}
                </div>

                <p
                  style={{
                    color: "var(--text-2)",
                    lineHeight: 1.8,
                    marginBottom: "2rem",
                  }}
                >
                  {p.desc}
                </p>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{
                    width: "fit-content",
                  }}
                >
                  View Project ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:768px){

          .proj-card{
            grid-template-columns:1fr!important;
          }

          .proj-card > div{
            order:unset!important;
          }
        }
      `}</style>
    </section>
  );
}