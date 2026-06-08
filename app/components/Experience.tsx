"use client";

const EXP = [
  {
    period: "Aug 2025 – Sep 2025",
    role: "Research Engineer Intern",
    org: "IIIT Hyderabad",
    logo: "/experience/exp2.png",
    highlights: [
      "Developed a real-time surveillance system using YOLOv8 achieving 92%+ mAP.",
      "Reduced video processing latency by 40% through FFmpeg and OpenCV optimization.",
      "Fine-tuned custom detection models on 5,000+ annotated frames.",
    ],
    tags: ["YOLOv8", "PyTorch", "OpenCV", "Computer Vision"],
  },
  {
    period: "May 2025 – Jun 2025",
    role: "Research Engineer Intern",
    org: "IIIT Kottayam",
    logo: "/experience/exp1.png",
    highlights: [
      "Built a clinical machine learning pipeline on 10,000+ ICU records.",
      "Achieved 87% F1-score using explainable AI techniques.",
      "Deployed the complete solution as a Flask API with inference latency below 2 seconds.",
    ],
    tags: ["Machine Learning", "SHAP", "Flask", "scikit-learn"],
  },
  {
    period: "Oct 2024 – Mar 2025",
    role: "AI/ML Trainee",
    org: "IIIT Hyderabad",
    logo: "/experience/exp2.png",
    highlights: [
      "Completed a six-month intensive AI/ML program focused on machine learning and deep learning.",
      "Built multiple predictive models achieving up to 90% accuracy on real-world datasets.",
    ],
    tags: ["Deep Learning", "PyTorch", "AI/ML"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
          className="exp-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "220px 1fr",
            gap: "5rem",
          }}
        >
          {/* Left Label */}

          <div
            className="reveal"
            style={{
              position: "sticky",
              top: "6rem",
              alignSelf: "start",
            }}
          >
            <div className="section-label">
              Experience
            </div>
          </div>

          {/* Experience Cards */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {EXP.map((item, index) => (
              <div
                key={index}
                className={`reveal d${(index % 4) + 1}`}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "18px",
                  padding: "2rem",
                  transition: "all .25s ease",
                }}
              >
                {/* Top Row */}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1rem",
                    flexWrap: "wrap",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <img
                      src={item.logo}
                      alt={item.org}
                      style={{
                        width: "52px",
                        height: "52px",
                        objectFit: "contain",
                        borderRadius: "12px",
                        background: "#fff",
                        padding: "4px",
                      }}
                    />

                    <div>
                      <h3
                        style={{
                          fontFamily: "'Syne',sans-serif",
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          marginBottom: ".25rem",
                        }}
                      >
                        {item.role}
                      </h3>

                      <div
                        style={{
                          color: "var(--blue)",
                          fontWeight: 600,
                          fontSize: ".95rem",
                        }}
                      >
                        {item.org}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: ".75rem",
                      color: "var(--text-3)",
                    }}
                  >
                    {item.period}
                  </div>
                </div>

                {/* Highlights */}

                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: ".9rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {item.highlights.map((point, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: ".8rem",
                        color: "var(--text-2)",
                        lineHeight: 1.8,
                        fontSize: ".95rem",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--blue)",
                          fontSize: "1rem",
                          marginTop: ".1rem",
                          flexShrink: 0,
                        }}
                      >
                        •
                      </span>

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: ".5rem",
                  }}
                >
                  {item.tags.map((tag) => (
                    <span key={tag} className="chip chip-blue">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){

          .exp-grid{
            grid-template-columns:1fr!important;
            gap:2rem!important;
          }

        }
      `}</style>
    </section>
  );
}