"use client";

export default function About() {
  return (
    <section id="about" style={{ padding: "7rem 0", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 2.5rem" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 2fr",
          gap: "5rem", alignItems: "start",
        }} className="about-grid">

          <div className="reveal">
            <div className="section-label">About</div>
          </div>

          <div>
            <p className="reveal" style={{
              fontFamily: "'Instrument Sans',sans-serif",
              fontSize: "clamp(1.1rem,1.8vw,1.3rem)",
              fontWeight: 400, color: "var(--text)",
              lineHeight: 1.75, letterSpacing: "-.005em",
            }}>
              I enjoy building modern web applications and software that solve real-world problems. I focus on creating clean, reliable, and user-friendly digital experiences.
            </p>
          </div>

        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:2rem!important}}`}</style>
    </section>
  );
}
