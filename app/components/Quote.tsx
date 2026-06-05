"use client";

export default function Quote() {
  return (
    <section style={{
      padding: "8rem 2.5rem",
      borderTop: "1px solid var(--border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle centered glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60vw 50vh at 50% 50%, rgba(99,130,255,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="reveal" style={{
        maxWidth: "760px", width: "100%",
        textAlign: "center", position: "relative", zIndex: 1,
      }}>
        {/* Opening mark */}
        <div style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: "clamp(4rem,10vw,7rem)",
          fontWeight: 800,
          lineHeight: 0.8,
          color: "rgba(99,130,255,0.15)",
          marginBottom: "1.5rem",
          userSelect: "none",
        }}>
          "
        </div>

        {/* Quote text */}
        <blockquote style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: "clamp(1.4rem,3vw,2.1rem)",
          fontWeight: 700,
          lineHeight: 1.35,
          letterSpacing: "-.025em",
          color: "var(--text)",
          margin: 0,
          marginBottom: "2rem",
        }}>
          The only way to do great work<br />
          is to love what you do.
        </blockquote>

        {/* Attribution */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: ".75rem",
        }}>
          <div style={{
            width: 28, height: 1,
            background: "var(--blue)", opacity: 0.5,
          }} />
          <span style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: ".78rem",
            color: "var(--text-3)",
            letterSpacing: ".1em",
            textTransform: "uppercase",
          }}>
            Steve Jobs
          </span>
          <div style={{
            width: 28, height: 1,
            background: "var(--blue)", opacity: 0.5,
          }} />
        </div>
      </div>
    </section>
  );
}
