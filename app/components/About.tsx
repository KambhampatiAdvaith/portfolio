"use client";

import {
  Globe,
  BrainCircuit,
  Cloud,
  Camera,
} from "lucide-react";

const CARDS = [
  {
    title: "Web Development",
    icon: Globe,
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.25)",
    color: "#60a5fa",
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.25)",
    color: "#a78bfa",
  },
  {
    title: "Cloud",
    icon: Cloud,
    bg: "rgba(34,211,238,0.08)",
    border: "rgba(34,211,238,0.25)",
    color: "#67e8f9",
  },
  {
    title: "Computer Vision",
    icon: Camera,
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.25)",
    color: "#34d399",
  },
];

export default function About() {
  return (
    <section
      id="about"
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
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "220px 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Section Label */}

          <div
            className="reveal"
            style={{
              position: "sticky",
              top: "6rem",
            }}
          >
            <div className="section-label">
              About
            </div>
          </div>

          {/* Content */}

          <div>
            <p
              className="reveal d1"
              style={{
                fontFamily:
                  "'Instrument Sans',sans-serif",
                fontSize: "1.15rem",
                lineHeight: 1.9,
                fontWeight: 500,
                color: "var(--text)",
                maxWidth: "720px",
                marginBottom: "3rem",
              }}
            >
              Hola, I'm Advaith , you can describe me as someone who is
              passionate about computing and
              builds systems for fun.
              <br />
              <br />
              I enjoy turning ideas into practical,
              scalable products while continuously
              expanding my knowledge through
              projects, research, and hands-on
              experience.
            </p>

            {/* Cards */}

            <div
              className="about-cards reveal d2"
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(2, 1fr)",
                gap: "1.25rem",
              }}
            >
              {CARDS.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    style={{
                      background: card.bg,
                      border: `1px solid ${card.border}`,
                      borderRadius: "18px",
                      padding: "2rem",
                      minHeight: "180px",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      transition:
                        "all .3s ease",

                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(-6px)";
                      e.currentTarget.style.boxShadow =
                        `0 20px 40px ${card.color}25`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "none";
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <div
                        style={{
                          color: card.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent:
                            "center",
                        }}
                      >
                        <Icon
                          size={46}
                          strokeWidth={1.8}
                        />
                      </div>

                      <span
                        style={{
                          fontFamily:
                            "'Syne',sans-serif",
                          fontSize: "1.15rem",
                          fontWeight: 700,
                          color:
                            "var(--text)",
                          textAlign:
                            "center",
                        }}
                      >
                        {card.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .about-grid{
            grid-template-columns:1fr!important;
            gap:2rem!important;
          }

          .about-cards{
            grid-template-columns:1fr!important;
          }
        }
      `}</style>
    </section>
  );
}