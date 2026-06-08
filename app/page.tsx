"use client";

import { useEffect, useState } from "react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Research from "./components/Research";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import CursorEffect from "./components/CursorEffect";
import HeroOrb from "./components/HeroOrb";
import ContactModal from "./components/ContactModal";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      {
        threshold: 0.07,
      }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loading]);

  return (
    <>
      <LoadingScreen done={!loading} />
      <CursorEffect />
      <HeroOrb />

      {!loading && (
        <>
          <Nav onContact={() => setContactOpen(true)} />

          <main
            style={{
              position: "relative",
              zIndex: 10,
            }}
          >
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Research />
          </main>

          <Footer />

          <ContactModal
            open={contactOpen}
            onClose={() => setContactOpen(false)}
          />
        </>
      )}
    </>
  );
}