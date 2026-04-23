import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/resume.js';

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

const ACCENT_COLORS = {
  'Languages':  'var(--accent)',
  'Frontend':   'var(--accent2)',
  'Backend':    'var(--accent3)',
  'ML / AI':    '#b47aff',
  'Databases':  '#ff7aab',
  'Tools':      '#7affdf',
};

export default function Skills() {
  return (
    <section id="skills" style={{ position: 'relative', zIndex: 2, background: 'var(--surface)' }}>
      <div className="section-wrap">
        <FadeUp>
          <div className="section-tag">Skills</div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="section-title" style={{ marginBottom: '4rem' }}>
            My <span className="outline">toolkit.</span>
          </h2>
        </FadeUp>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'var(--border)',
          border: '1px solid var(--border)',
        }}>
          {Object.entries(skills).map(([cat, items], ci) => (
            <FadeUp key={cat} delay={0.1 + ci * 0.07}>
              <div style={{
                background: 'var(--surface2)', padding: '2.2rem',
                height: '100%',
                transition: 'background 0.25s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--bg)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--surface2)'}
              >
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: ACCENT_COLORS[cat] || 'var(--accent)',
                  marginBottom: '1.2rem',
                  paddingBottom: '0.8rem',
                  borderBottom: `1px solid ${ACCENT_COLORS[cat] || 'var(--accent)'}22`,
                }}>
                  {cat}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {items.map((item, ii) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * ii, duration: 0.3 }}
                      whileHover={{ scale: 1.06, y: -2 }}
                      style={{
                        display: 'inline-block',
                        fontFamily: 'var(--font-body)', fontWeight: 600,
                        fontSize: '0.82rem', letterSpacing: '0.02em',
                        padding: '0.4rem 0.9rem',
                        background: 'var(--surface)',
                        border: '1px solid var(--border2)',
                        color: 'var(--text)',
                        cursor: 'default',
                        transition: 'all 0.18s',
                      }}
                      onMouseEnter={e => {
                        e.target.style.background = (ACCENT_COLORS[cat] || 'var(--accent)') + '18';
                        e.target.style.borderColor = ACCENT_COLORS[cat] || 'var(--accent)';
                        e.target.style.color = ACCENT_COLORS[cat] || 'var(--accent)';
                      }}
                      onMouseLeave={e => {
                        e.target.style.background = 'var(--surface)';
                        e.target.style.borderColor = 'var(--border2)';
                        e.target.style.color = 'var(--text)';
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Rotating badge */}
        <FadeUp delay={0.6}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '3rem' }}>
            <div style={{ position: 'relative', width: 110, height: 110 }}>
              <svg viewBox="0 0 110 110" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', animation: 'spin 12s linear infinite' }}>
                <defs>
                  <path id="circle" d="M 55,55 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
                </defs>
                <text fontFamily="JetBrains Mono, monospace" fontSize="9.5" fill="var(--text3)" letterSpacing="3.5">
                  <textPath href="#circle">FULL-STACK · ML · OPEN-SOURCE · </textPath>
                </text>
              </svg>
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontSize: '1.4rem',
                color: 'var(--accent)',
              }}>AK</div>
            </div>
          </div>
        </FadeUp>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #skills .section-wrap > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          #skills .section-wrap > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
