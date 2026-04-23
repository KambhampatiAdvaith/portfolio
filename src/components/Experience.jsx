import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '../data/resume.js';

function FadeUp({ children, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" style={{ position: 'relative', zIndex: 2, background: 'var(--surface)' }}>
      <div className="section-wrap">

        <FadeUp>
          <div className="section-tag">Experience</div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="section-title" style={{ marginBottom: '4rem' }}>
            Where I've<br /><span className="outline">worked.</span>
          </h2>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '4rem', alignItems: 'start' }}>

          {/* Left: tab list */}
          <FadeUp delay={0.2}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {experience.map((e, i) => (
                <button key={i} onClick={() => setActive(i)} style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  textAlign: 'left', padding: '1.4rem 1.2rem',
                  borderLeft: `2px solid ${active === i ? 'var(--accent)' : 'var(--border2)'}`,
                  transition: 'all 0.22s',
                  marginBottom: '0.3rem',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                    color: active === i ? 'var(--accent)' : 'var(--text3)',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    marginBottom: '0.3rem',
                  }}>{e.period}</div>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontWeight: 700,
                    fontSize: '0.95rem',
                    color: active === i ? 'var(--text)' : 'var(--text2)',
                    marginBottom: '0.2rem',
                  }}>{e.company}</div>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.8rem',
                    color: active === i ? 'var(--text2)' : 'var(--text3)',
                  }}>{e.role}</div>
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Right: detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                color: 'var(--accent)', letterSpacing: '0.12em',
                textTransform: 'uppercase', marginBottom: '0.5rem',
              }}>{experience[active].period}</div>

              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: '2.2rem',
                color: 'var(--text)', letterSpacing: '0.02em',
                marginBottom: '0.3rem',
              }}>{experience[active].role}</h3>

              <div style={{
                fontFamily: 'var(--font-body)', fontSize: '1rem',
                color: 'var(--text2)', marginBottom: '0.5rem', fontWeight: 500,
              }}>@ {experience[active].company}</div>

              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                color: 'var(--accent2)', letterSpacing: '0.06em',
                marginBottom: '2rem',
              }}>
                ↳ {experience[active].short}
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {experience[active].bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                  >
                    <span style={{
                      color: 'var(--accent)', fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem', marginTop: '0.25rem', flexShrink: 0,
                    }}>→</span>
                    <span style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.95rem',
                      color: 'var(--text2)', lineHeight: 1.75,
                    }}>{b}</span>
                  </motion.li>
                ))}
              </ul>

              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {experience[active].tags.map(t => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience .section-wrap > div:last-child { grid-template-columns: 1fr !important; gap: 2rem !important; }
          #experience .section-wrap > div:last-child > div:first-child { display: flex !important; flex-direction: row !important; overflow-x: auto; gap: 0.5rem !important; padding-bottom: 1rem; }
          #experience .section-wrap > div:last-child > div:first-child button { min-width: 160px; border-left: none !important; border-bottom: 2px solid var(--border2); }
        }
      `}</style>
    </section>
  );
}
