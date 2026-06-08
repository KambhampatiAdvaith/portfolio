"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;

    if (!el) return;

    setTimeout(() => {
      el.style.width = "100%";
    }, 400);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          padding: "0 2.5rem",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "760px" }}>
          <h1
            className="reveal d1"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.05em",
              color: "var(--text)",
              marginBottom: "1.5rem",
            }}
          >
            Advaith
          </h1>

          <div
            ref={lineRef}
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg,var(--blue),transparent)",
              width: 0,
              transition:
                "width 1.2s cubic-bezier(.4,0,.2,1)",
              marginBottom: "2.5rem",
            }}
          />

          <div
            className="reveal d2"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".35rem",
            }}
          >
            <div
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(2rem,4vw,3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              Building systems.
            </div>

            <div
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(2rem,4vw,3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                opacity: 0.85,
              }}
            >
              Creating solutions.
            </div>

            <div
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(2rem,4vw,3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                opacity: 0.7,
              }}
            >
              Delivering impact.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}