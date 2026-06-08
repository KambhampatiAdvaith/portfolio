"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "3rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <h3
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "1.8rem",
            fontWeight: 700,
          }}
        >
          Contact Me
        </h3>

        <div
          style={{
            display: "flex",
            gap: "1.5rem",
          }}
        >
          <a
            href="mailto:kadvaith234@gmail.com"
            style={{ color: "var(--text)" }}
          >
            <FaEnvelope size={28} />
          </a>

          <a
            href="https://github.com/KambhampatiAdvaith"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--text)" }}
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/kambhampati-advaith-2300592b0"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--text)" }}
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}