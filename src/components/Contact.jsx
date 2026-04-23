import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personal } from '../data/resume.js';

function FadeUp({ children, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section id="contact" style={{ position: 'relative', zIndex: 2, overflow: 'hidden' }}>

      {/* Big bg text */}
      <div style={{
        position: 'absolute', bottom: '-3rem', left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(5rem, 16vw, 16rem)',
        color: 'transparent',
        WebkitTextStroke: '1px rgba(232,255,71,0.04)',
        letterSpacing: '0.04em', userSelect: 'none', whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>CONTACT</div>

      <div className="section-wrap" style={{ textAlign: 'center', position: 'relative' }}>

        <FadeUp>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Get In Touch
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
            Let's build<br />
            <span className="accent-word">something</span><br />
            <span className="outline">great.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1rem',
            color: 'var(--text2)', lineHeight: 1.8,
            maxWidth: 500, margin: '0 auto 3rem',
          }}>
            I'm actively looking for internships, research collaborations, and exciting full-time opportunities.
            Whether you have a role in mind or just want to chat — I'm always open.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <a href={`mailto:${personal.email}`} style={{
            display: 'inline-block',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem, 4vw, 3.5rem)',
            color: 'var(--text)', textDecoration: 'none',
            letterSpacing: '0.02em',
            borderBottom: '2px solid var(--accent)',
            paddingBottom: '0.3rem', marginBottom: '4rem',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text)'}
          >
            {personal.email}
          </a>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '5rem' }}>
            {[
              { label: 'GitHub', href: personal.github },
              { label: 'LinkedIn', href: personal.linkedin },
              { label: `+91-8247809593`, href: 'tel:+918247809593' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                className="btn btn-outline">
                {s.label}
              </a>
            ))}
          </div>
        </FadeUp>

        {/* Footer */}
        <FadeUp delay={0.5}>
          <div style={{
            borderTop: '1px solid var(--border)', paddingTop: '2rem',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: '1rem',
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
              color: 'var(--text3)',
            }}>© 2025 Advaith Kambhampati — Designed & engineered with precision.</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 8px var(--accent)',
                display: 'inline-block',
                animation: 'glow-pulse 1.5s ease-in-out infinite',
              }} />
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text3)',
              }}>Open to work</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
