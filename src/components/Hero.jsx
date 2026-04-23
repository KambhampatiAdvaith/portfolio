import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data/resume.js';

const ROLES = personal.roles;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter
  useEffect(() => {
    const target = ROLES[roleIndex];
    let i = typing ? displayed.length : displayed.length;
    let timeout;

    if (typing) {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex(i => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  // Cursor blink
  useEffect(() => {
    const t = setInterval(() => setShowCursor(c => !c), 530);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '0 clamp(1.5rem, 6vw, 5rem)',
    }}>

      {/* Giant BG text */}
      <div style={{
        position: 'absolute', bottom: '-4rem', right: '-2rem',
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(8rem, 20vw, 22rem)',
        lineHeight: 1, letterSpacing: '-0.02em',
        color: 'transparent',
        WebkitTextStroke: '1px rgba(232,255,71,0.04)',
        userSelect: 'none', pointerEvents: 'none', zIndex: 1,
        whiteSpace: 'nowrap',
      }}>ADVAITH</div>

      {/* Glow blob */}
      <div style={{
        position: 'absolute', width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(232,255,71,0.06) 0%, transparent 70%)',
        top: '20%', left: '-10%', pointerEvents: 'none', zIndex: 1,
        animation: 'glow-pulse 4s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(71,201,255,0.05) 0%, transparent 70%)',
        bottom: '10%', right: '5%', pointerEvents: 'none', zIndex: 1,
        animation: 'glow-pulse 5s ease-in-out infinite 2s',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, width: '100%', paddingTop: '6rem', paddingBottom: '4rem' }}>

        {/* Tag line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex', alignItems: 'center', gap: 12,
            marginBottom: '2rem',
          }}
        >
          <span style={{
            width: 8, height: 8, borderRadius: '50%',
            background: 'var(--accent)',
            boxShadow: '0 0 10px var(--accent)',
            animation: 'glow-pulse 1.5s ease-in-out infinite',
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
            color: 'var(--text2)', letterSpacing: '0.16em', textTransform: 'uppercase',
          }}>
            Available for opportunities — 2025
          </span>
        </motion.div>

        {/* Name */}
        <div style={{ overflow: 'hidden', marginBottom: '0.5rem' }}>
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4.5rem, 13vw, 12rem)',
              lineHeight: 0.88, letterSpacing: '0.01em',
              color: 'var(--text)',
            }}
          >
            ADVAITH
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '1.5rem' }}>
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4.5rem, 13vw, 12rem)',
              lineHeight: 0.88, letterSpacing: '0.01em',
              WebkitTextStroke: '1.5px rgba(242,237,228,0.25)',
              color: 'transparent',
            }}
          >
            KAMBHAMPATI
          </motion.h1>
        </div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{
            fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.85rem, 1.8vw, 1.15rem)',
            color: 'var(--accent)', letterSpacing: '0.08em',
            marginBottom: '2.5rem', height: '1.8rem',
          }}
        >
          {`> `}{displayed}
          <span style={{ opacity: showCursor ? 1 : 0, color: 'var(--accent)', fontWeight: 300 }}>_</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            color: 'var(--text2)',
            lineHeight: 1.75,
            maxWidth: 520,
            marginBottom: '3rem',
          }}
        >
          Undergraduate student passionate about tech and building solutions that matter.
          Part-time blog writer, full-time developer turning ideas into reality.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <button onClick={() => scrollTo('#projects')} className="btn btn-solid">
            View Projects →
          </button>
          <button onClick={() => scrollTo('#contact')} className="btn btn-outline">
            Get In Touch
          </button>
          <a
            href="https://github.com/KambhampatiAdvaith"
            target="_blank" rel="noreferrer"
            className="btn btn-outline"
          >
            GitHub ↗
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            display: 'flex', gap: '3rem', marginTop: '5rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { num: '92%+', label: 'Object Detection Accuracy' },
            { num: '87%', label: 'F1-Score (Clinical ML)' },
            { num: '10K+', label: 'Records Processed' },
            { num: '2x', label: 'IIIT Research Intern' },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.1 }}
              style={{ borderTop: '1px solid var(--border2)', paddingTop: '1rem', minWidth: 120 }}
            >
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '2.2rem',
                color: 'var(--accent)', lineHeight: 1, letterSpacing: '0.02em',
              }}>{s.num}</div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em',
                marginTop: 4,
              }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        onClick={e => { e.preventDefault(); scrollTo('#about'); }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute', bottom: '2.5rem', right: 'clamp(1.5rem, 5vw, 4rem)',
          display: 'flex', alignItems: 'center', gap: 8,
          fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
          color: 'var(--text3)', letterSpacing: '0.12em', textTransform: 'uppercase',
          textDecoration: 'none', zIndex: 2,
          writingMode: 'vertical-rl',
          animation: 'float 3s ease-in-out infinite',
        }}
      >
        Scroll Down
        <span style={{ width: 1, height: 50, background: 'linear-gradient(var(--text3), transparent)', display: 'block' }} />
      </motion.a>
    </section>
  );
}
