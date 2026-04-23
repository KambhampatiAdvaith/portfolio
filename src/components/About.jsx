import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personal, education, achievements } from '../data/resume.js';

function FadeUp({ children, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ position: 'relative', zIndex: 2 }}>
      <div className="section-wrap">

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

          {/* Left: text */}
          <div>
            <FadeUp>
              <div className="section-tag">About Me</div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="section-title" style={{ marginBottom: '2rem' }}>
                Builder by<br />
                <span className="accent-word">curiosity,</span><br />
                <span className="outline">researcher</span><br />
                by choice.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '1.02rem',
                color: 'var(--text2)', lineHeight: 1.9, marginBottom: '1.3rem',
              }}>
                I'm <strong style={{ color: 'var(--text)' }}>Advaith Kambhampati</strong>, a Computer Science student at Geethanjali College of Engineering and Technology, Hyderabad (2023–2027). I've had the privilege of conducting research at <strong style={{ color: 'var(--text)' }}>IIIT Hyderabad</strong> and <strong style={{ color: 'var(--text)' }}>IIIT Kottayam</strong>.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '1.02rem',
                color: 'var(--text2)', lineHeight: 1.9, marginBottom: '2rem',
              }}>
                I love working on problems that matter — whether that's real-time computer vision for surveillance, ML for clinical decision support, or full-stack SaaS products. Outside engineering, I lead the <strong style={{ color: 'var(--accent)' }}>GCET Open Source Foundation</strong> as Vice President.
              </p>
            </FadeUp>

            {/* Education card */}
            <FadeUp delay={0.4}>
              <div style={{
                border: '1px solid var(--border2)', padding: '1.5rem',
                background: 'var(--surface)',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0,
                  width: 3, height: '100%', background: 'var(--accent)',
                }} />
                <div style={{ paddingLeft: '0.8rem' }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                    color: 'var(--accent)', letterSpacing: '0.14em',
                    textTransform: 'uppercase', marginBottom: '0.5rem',
                  }}>Education</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem', color: 'var(--text)', marginBottom: '0.3rem' }}>
                    B.Tech — Computer Science & Engineering
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--text2)' }}>
                    Geethanjali College of Engineering and Technology
                  </div>
                  <div style={{ display: 'flex', gap: '2rem', marginTop: '0.8rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text3)' }}>2023 – 2027</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent)' }}>GPA: 7.59 / 10</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right: achievements + leadership */}
          <div style={{ paddingTop: '5rem' }}>
            {achievements.map((a, i) => (
              <FadeUp key={i} delay={0.2 + i * 0.15}>
                <div style={{
                  border: '1px solid var(--border)', padding: '2rem',
                  marginBottom: '1.5rem', background: 'var(--surface2)',
                  transition: 'all 0.25s', cursor: 'default',
                  position: 'relative', overflow: 'hidden',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                    color: 'var(--text3)', letterSpacing: '0.12em',
                    textTransform: 'uppercase', marginBottom: '0.5rem',
                  }}>{a.period}</div>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontWeight: 700,
                    fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.3rem',
                  }}>{a.title}</div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                    color: 'var(--accent)', marginBottom: '0.8rem',
                  }}>{a.org}</div>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.88rem',
                    color: 'var(--text2)', lineHeight: 1.75,
                  }}>{a.desc}</div>
                </div>
              </FadeUp>
            ))}

            {/* Fun facts */}
            <FadeUp delay={0.5}>
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px',
                border: '1px solid var(--border)', background: 'var(--border)',
              }}>
                {[
                  { n: '5+', l: 'Tech Sessions Led' },
                  { n: '10+', l: 'Team Members' },
                  { n: '40%', l: 'OSS Participation ↑' },
                  { n: '30+', l: 'FPS Pipeline' },
                ].map(s => (
                  <div key={s.l} style={{
                    background: 'var(--surface)', padding: '1.4rem',
                    textAlign: 'center',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-display)', fontSize: '2.2rem',
                      color: 'var(--accent)', lineHeight: 1,
                    }}>{s.n}</div>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                      color: 'var(--text3)', textTransform: 'uppercase',
                      letterSpacing: '0.1em', marginTop: 4,
                    }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .section-wrap > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
          #about .section-wrap > div > div:last-child { padding-top: 0 !important; }
        }
      `}</style>
    </section>
  );
}
