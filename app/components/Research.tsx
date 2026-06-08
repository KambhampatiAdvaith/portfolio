"use client";

export default function Research() {
  return (
    <section
      id="research"
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
          className="reveal"
          style={{
            marginBottom: "2rem",
          }}
        >
          <div className="section-label">Publications</div>
        </div>

        <div
          className="reveal d1"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "18px",
            padding: "2rem",
          }}
        >
          <div
            style={{
              color: "#a78bfa",
              fontSize: ".8rem",
              fontWeight: 600,
              marginBottom: "1rem",
            }}
          >
            IEEE AISIIS 2026 · Accepted
          </div>

          <h3
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "1.3rem",
              fontWeight: 700,
              lineHeight: 1.4,
              marginBottom: "1rem",
              maxWidth: "850px",
            }}
          >
            Modeling Non-Random Clinical Missingness for
            Interpretable ICU Event Risk Prediction
          </h3>

          <p
            style={{
              color: "var(--text-2)",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
              maxWidth: "800px",
            }}
          >
            Research focused on improving clinical decision support systems by
            modeling non-random missingness in ICU data while maintaining
            interpretability through SHAP-based explainable AI techniques.
          </p>
        </div>
      </div>
    </section>
  );
}