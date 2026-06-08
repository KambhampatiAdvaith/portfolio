"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface ContactModalProps {
    open: boolean;
    onClose: () => void;
}

export default function ContactModal({
    open,
    onClose,
}: ContactModalProps) {
    if (!open) return null;

    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.85)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                zIndex: 999999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: "100%",
                    maxWidth: "700px",
                    background: "#05060a",
                    border: "1px solid var(--border)",
                    borderRadius: "24px",
                    padding: "3rem",
                    position: "relative",
                    textAlign: "center",
                }}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1.5rem",
                        background: "none",
                        border: "none",
                        color: "var(--text)",
                        fontSize: "2rem",
                        cursor: "pointer",
                    }}
                >
                    ×
                </button>

                <h2
                    style={{
                        fontFamily: "'Syne',sans-serif",
                        fontSize: "clamp(2.5rem,5vw,4rem)",
                        fontWeight: 800,
                        marginBottom: ".5rem",
                    }}
                >
                    Let's Connect
                </h2>

                <p
                    style={{
                        color: "var(--text-2)",
                        marginBottom: "3rem",
                    }}
                >
                    Find me on these platforms
                </p>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "3rem",
                        flexWrap: "wrap",
                    }}
                >
                    <a
                        href="mailto:kadvaith234@gmail.com"
                        style={{
                            color: "#6382ff",
                            textDecoration: "none",
                        }}
                    >
                        <FaEnvelope size={60} />
                    </a>

                    <a
                        href="https://github.com/KambhampatiAdvaith"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            color: "#ffffff",
                            textDecoration: "none",
                        }}
                    >
                        <FaGithub size={60} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/kambhampati-advaith-2300592b0"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            color: "#0A66C2",
                            textDecoration: "none",
                        }}
                    >
                        <FaLinkedin size={60} />
                    </a>
                </div>
            </div>
        </div>
    );
}