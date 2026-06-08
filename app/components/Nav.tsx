"use client";

import { useEffect, useState } from "react";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Technologies", href: "#skills" },
  { label: "Research", href: "#research" },
];

export default function Nav({
  onContact,
}: {
  onContact: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", fn);

    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",

        width: "min(1050px, 92%)",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        padding: ".9rem 1.5rem",

        background: scrolled
          ? "rgba(5,6,10,.95)"
          : "rgba(5,6,10,.85)",

        backdropFilter: "blur(24px)",

        border: "1px solid rgba(255,255,255,.10)",

        borderRadius: "999px",

        zIndex: 1000,

        boxShadow:
          "0 10px 40px rgba(0,0,0,.35)",
      }}
    >
      {/* Navigation Links */}

      <div
        className="nav-desktop"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2.5rem",
          margin: "0 auto",
        }}
      >
        {NAV.map((item) => (
          <button
            key={item.href}
            onClick={() => go(item.href)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",

              fontFamily:
                "'Instrument Sans',sans-serif",

              fontSize: ".95rem",
              fontWeight: 500,

              color: "var(--text-2)",

              transition: "all .25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color =
                "var(--text)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color =
                "var(--text-2)";
            }}
          >
            {item.label}
          </button>
        ))}

        <button
          onClick={onContact}
          style={{
            background: "var(--blue)",
            color: "#fff",

            border: "none",

            padding: ".75rem 1.35rem",

            borderRadius: "999px",

            fontWeight: 600,
            fontSize: ".9rem",

            cursor: "pointer",

            transition: "all .25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "translateY(0)";
          }}
        >
          Contact
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop{
            gap:1rem !important;
            flex-wrap:wrap;
            justify-content:center;
          }
        }

        @media (max-width: 640px) {
          nav{
            width:95% !important;
          }

          .nav-desktop button{
            font-size:.85rem !important;
          }
        }
      `}</style>
    </nav>
  );
}