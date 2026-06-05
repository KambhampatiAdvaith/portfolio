"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    setTimeout(() => { el.style.width = "100%"; }, 400);
  }, []);

  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden", paddingTop: "5rem",
    }}>
      {/* Ambient glows — kept exactly as before */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60vw 50vh at 70% 40%, rgba(99,130,255,0.055) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40vw 40vh at 25% 65%, rgba(139,92,246,0.035) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 2.5rem", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "680px" }}>

          {/* Eyebrow */}
          <div className="reveal" style={{
            display: "inline-flex", alignItems: "center", gap: ".5rem",
            marginBottom: "2.2rem",
            fontFamily: "'JetBrains Mono',monospace", fontSize: ".72rem",
            color: "var(--text-3)", letterSpacing: ".12em", textTransform: "uppercase",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--blue)", display: "block", boxShadow: "0 0 8px rgba(99,130,255,0.6)" }} />
            Hyderabad, IN
          </div>

          {/* Name */}
          <h1 className="reveal d1" style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(3rem,8vw,6.5rem)",
            fontWeight: 800, lineHeight: 1.0,
            letterSpacing: "-.04em", marginBottom: "1.5rem",
            color: "var(--text)",
          }}>
            Kambhampati<br />
            <span style={{ color: "rgba(240,242,255,0.35)" }}>Advaith</span>
          </h1>

          {/* Animated divider line */}
          <div ref={lineRef} style={{
            height: "1px",
            background: "linear-gradient(90deg,var(--blue),transparent)",
            width: 0, transition: "width 1.2s cubic-bezier(.4,0,.2,1)",
            marginBottom: "2rem",
          }} />

          {/* One-liner */}
          <p className="reveal d2" style={{
            fontFamily: "'Instrument Sans',sans-serif",
            fontSize: "clamp(1.1rem,2vw,1.35rem)",
            fontWeight: 400, color: "var(--text-2)",
            lineHeight: 1.6, maxWidth: "520px", marginBottom: "2.5rem",
          }}>
            Building modern web experiences and scalable software products.
          </p>

          {/* CTAs */}
          <div className="reveal d3" style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
            <a href="#projects"
              onClick={e => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-primary">
              View work →
            </a>
            <a href="mailto:kadvaith234@gmail.com" className="btn-ghost">
              Get in touch
            </a>
          </div>

          {/* Stats section REMOVED */}

        </div>
      </div>
    </section>
  );
}
