import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = document.querySelectorAll('section[id]');
      let cur = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 160) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '1.2rem clamp(1.5rem, 5vw, 4rem)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(2,2,2,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid #1c1c1c' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Logo */}
      <a onClick={() => scrollTo('#hero')} style={{ textDecoration: 'none', cursor: 'pointer' }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: '1.5rem',
          letterSpacing: '0.06em', color: 'var(--text)',
        }}>
          AK<span style={{ color: 'var(--accent)' }}>.</span>
        </span>
      </a>

      {/* Desktop links */}
      <ul style={{
        display: 'flex', gap: '2.5rem', listStyle: 'none',
        alignItems: 'center',
      }} className="desktop-nav">
        {links.map(l => (
          <li key={l.label}>
            <a onClick={() => scrollTo(l.href)} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              textDecoration: 'none', cursor: 'pointer',
              color: active === l.href.slice(1) ? 'var(--accent)' : 'var(--text2)',
              transition: 'color 0.2s',
              position: 'relative',
            }}>
              {l.label}
              {active === l.href.slice(1) && (
                <motion.span layoutId="nav-dot" style={{
                  position: 'absolute', bottom: '-4px', left: '50%',
                  transform: 'translateX(-50%)',
                  width: 4, height: 4, borderRadius: '50%',
                  background: 'var(--accent)', display: 'block',
                }} />
              )}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="mailto:kadvaith234@gmail.com"
        className="btn btn-solid"
        style={{ fontSize: '0.68rem', padding: '0.6rem 1.3rem' }}
      >
        Hire Me →
      </a>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(o => !o)}
        className="mobile-menu-btn"
        style={{
          display: 'none', background: 'none', border: 'none',
          cursor: 'pointer', padding: 8,
        }}
        aria-label="Toggle menu"
      >
        <div style={{ width: 22, height: 2, background: 'var(--accent)', marginBottom: 5, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
        <div style={{ width: 22, height: 2, background: 'var(--accent)', marginBottom: 5, opacity: menuOpen ? 0 : 1 }} />
        <div style={{ width: 22, height: 2, background: 'var(--accent)', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none', transition: 'all 0.3s' }} />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: 70, left: 0, right: 0,
              background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)',
              padding: '2rem', borderBottom: '1px solid var(--border)',
            }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(l.href)}
                style={{
                  display: 'block', padding: '1rem 0',
                  fontFamily: 'var(--font-display)', fontSize: '1.6rem',
                  letterSpacing: '0.04em', color: 'var(--text)',
                  textDecoration: 'none', cursor: 'pointer',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; flex-direction: column; }
          nav a.btn { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
}
