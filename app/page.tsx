"use client";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import CommandMenu from "./components/CommandMenu";
import CursorEffect from "./components/CursorEffect";
import TensorFlowField from "./components/ParticleCanvas";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") { e.preventDefault(); setCmdOpen(p => !p); }
      if (e.key === "Escape") setCmdOpen(false);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  useEffect(() => {
    if (loading) return;
    const t = setTimeout(() => {
      const obs = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
        { threshold: 0.07 }
      );
      document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
      return () => obs.disconnect();
    }, 100);
    return () => clearTimeout(t);
  }, [loading]);

  return (
    <>
      <LoadingScreen done={!loading} />
      <CursorEffect />
      <TensorFlowField />
      {!loading && (
        <>
          <Nav onCmd={() => setCmdOpen(true)} />
          <main style={{ position: "relative", zIndex: 10 }}>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Research />
            <Contact />
            <Quote />
          </main>
          <Footer />
          <CommandMenu open={cmdOpen} onClose={() => setCmdOpen(false)} />
        </>
      )}
    </>
  );
}
