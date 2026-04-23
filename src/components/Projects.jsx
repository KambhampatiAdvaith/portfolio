import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/resume.js';

function FadeUp({ children, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function ProjectCard({ project, index, featured = false }) {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    card.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px)`;
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
  };

  return (
    <FadeUp delay={0.1 * index}>
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          border: '1px solid var(--border)',
          background: 'var(--surface)',
          padding: featured ? '3rem' : '2.5rem',
          gridColumn: featured ? '1 / -1' : 'auto',
          transition: 'border-color 0.25s, box-shadow 0.25s',
          cursor: 'default',
          position: 'relative', overflow: 'hidden',
          transformStyle: 'preserve-3d',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--accent)';
          e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.7), 0 0 40px rgba(232,255,71,0.04)';
        }}
        onMouseLeave2={e => {
          e.currentTarget.style.borderColor = 'var(--border)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Corner accent */}
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: 0, height: 0,
          borderStyle: 'solid',
          borderWidth: '0 40px 40px 0',
          borderColor: `transparent var(--accent) transparent transparent`,
          opacity: 0.6,
        }} />

        <div style={{ display: featured ? 'grid' : 'block', gridTemplateColumns: featured ? '1fr 1fr' : 'auto', gap: featured ? '3rem' : 0, alignItems: 'center' }}>
          <div>
            {/* Number */}
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: '4.5rem',
              color: 'rgba(232,255,71,0.08)', lineHeight: 1,
              letterSpacing: '0.02em', marginBottom: '-1rem',
              userSelect: 'none',
            }}>{project.num}</div>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: featured ? '2.8rem' : '1.8rem',
              color: 'var(--text)', letterSpacing: '0.02em',
              lineHeight: 1, marginBottom: '0.4rem',
            }}>{project.title}</h3>

            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
              color: 'var(--accent2)', letterSpacing: '0.08em',
              marginBottom: '1.2rem',
            }}>{project.subtitle}</div>

            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.92rem',
              color: 'var(--text2)', lineHeight: 1.8,
              marginBottom: '1.5rem',
            }}>{project.desc}</p>

            {/* Metrics */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {project.metrics.map(m => (
                <span key={m} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                  color: 'var(--accent)', letterSpacing: '0.06em',
                  background: 'rgba(232,255,71,0.06)',
                  border: '1px solid rgba(232,255,71,0.2)',
                  padding: '0.25rem 0.75rem',
                }}>✦ {m}</span>
              ))}
            </div>

            {/* Tags + links */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.tags.map(t => <span key={t} className="chip">{t}</span>)}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                    color: 'var(--text2)', textDecoration: 'none',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    borderBottom: '1px solid var(--border2)', paddingBottom: 2,
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                    onMouseEnter={e => { e.target.style.color = 'var(--accent)'; e.target.style.borderColor = 'var(--accent)'; }}
                    onMouseLeave={e => { e.target.style.color = 'var(--text2)'; e.target.style.borderColor = 'var(--border2)'; }}
                  >GitHub ↗</a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                    color: 'var(--text2)', textDecoration: 'none',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    borderBottom: '1px solid var(--border2)', paddingBottom: 2,
                  }}>Live ↗</a>
                )}
              </div>
            </div>
          </div>

          {/* Featured: visual panel */}
          {featured && (
            <div style={{
              background: 'linear-gradient(135deg, #0a140a 0%, #0a0f14 100%)',
              border: '1px solid var(--border)', height: 260,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Abstract visual */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(232,255,71,0.08) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(71,201,255,0.06) 0%, transparent 60%)',
              }} />
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '5rem',
                color: 'rgba(232,255,71,0.15)', letterSpacing: '0.04em',
                position: 'relative', userSelect: 'none',
              }}>AI</div>
              <div style={{
                position: 'absolute', bottom: '1.5rem', left: '1.5rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                color: 'rgba(255,255,255,0.2)', letterSpacing: '0.12em',
              }}>SMARTHIRE v1.0 — AI RECRUITMENT</div>
            </div>
          )}
        </div>
      </div>
    </FadeUp>
  );
}

export default function Projects() {
  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="projects" style={{ position: 'relative', zIndex: 2 }}>
      <div className="section-wrap">
        <FadeUp>
          <div className="section-tag">Projects</div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 className="section-title">
              Selected<br /><span className="accent-word">work.</span>
            </h2>
            <a href="https://github.com/KambhampatiAdvaith" target="_blank" rel="noreferrer"
              className="btn btn-outline" style={{ alignSelf: 'flex-end' }}>
              All Projects ↗
            </a>
          </div>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5px' }}>
          {/* Featured */}
          {featured.map((p, i) => <ProjectCard key={p.title} project={p} index={i} featured />)}
          {/* Rest */}
          {rest.map((p, i) => <ProjectCard key={p.title} project={p} index={i + featured.length} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects .section-wrap > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
