"use client";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Writing", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Nav({ onCmd }: { onCmd: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "1rem 2.5rem",
      display: "flex", alignItems: "center", justifyContent: "center",
      background: scrolled ? "rgba(4,5,13,0.88)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "all .35s ease",
    }}>
      {/* Centered nav links */}
      <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="nav-desktop">
        {NAV.map(n => (
          <button key={n.href} onClick={() => go(n.href)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'Instrument Sans',sans-serif",
              fontSize: ".85rem", fontWeight: 500,
              color: "var(--text-2)", transition: "color .2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-2)")}>
            {n.label}
          </button>
        ))}
        <button onClick={onCmd}
          style={{
            background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
            borderRadius: "7px", padding: ".3rem .65rem",
            color: "var(--text-3)", fontSize: ".72rem",
            fontFamily: "'JetBrains Mono',monospace", cursor: "pointer", transition: "all .2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-accent)"; e.currentTarget.style.color = "var(--blue)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-3)"; }}>
          ⌘K
        </button>
      </div>

      {/* Mobile hamburger — right-aligned on mobile */}
      <button onClick={() => setOpen(!open)}
        style={{
          display: "none", position: "absolute", right: "1.5rem",
          background: "none", border: "1px solid var(--border)",
          borderRadius: "7px", padding: ".4rem .6rem",
          color: "var(--text)", cursor: "pointer",
        }}
        className="nav-mobile-btn">
        {open ? "✕" : "≡"}
      </button>

      {open && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "rgba(4,5,13,0.97)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border)",
          padding: "1.5rem 2.5rem",
          display: "flex", flexDirection: "column", gap: "1.25rem",
        }}>
          {NAV.map(n => (
            <button key={n.href} onClick={() => go(n.href)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Instrument Sans',sans-serif",
                fontSize: "1rem", fontWeight: 500,
                color: "var(--text-2)", textAlign: "left",
              }}>
              {n.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:768px){
          .nav-desktop{display:none!important}
          .nav-mobile-btn{display:block!important}
        }
      `}</style>
    </nav>
  );
}
