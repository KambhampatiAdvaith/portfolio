"use client";

const CARDS = [
  {
    label: "Email",
    value: "kadvaith234@gmail.com",
    href: "mailto:kadvaith234@gmail.com",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    accent: "#6382ff",
    desc: "Send a message",
  },
  {
    label: "GitHub",
    value: "github.com/kadvaith234",
    href: "https://github.com/kadvaith234",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ),
    accent: "#8b5cf6",
    desc: "View my work",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/advaith",
    href: "https://linkedin.com",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    accent: "#22d3ee",
    desc: "Connect with me",
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "7rem 0 6rem", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <div className="section-label reveal">Contact</div>
          <h2 className="reveal d1" style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(1.8rem,3vw,2.5rem)",
            fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1.1,
          }}>
            Let's connect.
          </h2>
        </div>

        {/* Three premium cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.25rem",
        }} className="contact-cards">
          {CARDS.map((card, i) => (
            <a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noreferrer" : undefined}
              className={`reveal d${i + 1}`}
              style={{
                display: "flex", flexDirection: "column",
                gap: "1.5rem",
                textDecoration: "none",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "18px",
                padding: "2.5rem 2rem",
                position: "relative", overflow: "hidden",
                transition: "all .3s cubic-bezier(.16,1,.3,1)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-6px)";
                el.style.background = `${card.accent}0d`;
                el.style.borderColor = `${card.accent}35`;
                el.style.boxShadow = `0 24px 60px rgba(0,0,0,0.35), 0 0 0 1px ${card.accent}20`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.background = "rgba(255,255,255,0.025)";
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Top gradient line */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "1px",
                background: `linear-gradient(90deg, ${card.accent}60, transparent)`,
              }} />

              {/* Corner arrow */}
              <div style={{
                position: "absolute", top: "1.25rem", right: "1.25rem",
                color: "var(--text-3)", fontSize: ".8rem",
                transition: "color .2s",
              }}>
                ↗
              </div>

              {/* Icon */}
              <div style={{
                width: 56, height: 56,
                borderRadius: "14px",
                background: `${card.accent}12`,
                border: `1px solid ${card.accent}25`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: card.accent,
                transition: "background .3s",
              }}>
                {card.icon}
              </div>

              {/* Text */}
              <div>
                <div style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "1.25rem", fontWeight: 700,
                  color: "var(--text)", marginBottom: ".35rem",
                  letterSpacing: "-.02em",
                }}>
                  {card.label}
                </div>
                <div style={{
                  fontSize: ".82rem", color: "var(--text-3)",
                  fontFamily: "'JetBrains Mono',monospace",
                  letterSpacing: ".02em", marginBottom: ".75rem",
                }}>
                  {card.value}
                </div>
                <div style={{
                  fontSize: ".82rem", color: "var(--text-2)",
                  fontFamily: "'Instrument Sans',sans-serif",
                }}>
                  {card.desc}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .contact-cards{ grid-template-columns:1fr!important; }
        }
      `}</style>
    </section>
  );
}
