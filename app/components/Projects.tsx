"use client";
import React, { useState } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "SmartHire",
    tagline: "AI voice recruitment platform",
    desc: "Full-stack SaaS conducting AI-driven voice interviews in real time. Handles concurrent sessions with dynamic question generation and structured candidate evaluation.",
    tags: ["Next.js", "Vapi.ai", "Supabase", "Grok API", "PostgreSQL"],
    metrics: ["100+ sessions", "Real-time concurrency", "~60% ops reduction"],
    github: "https://github.com/kadvaith234",
    live: "#",
    accent: "#6382ff",
    img: "fullstack",
  },
  {
    id: 2,
    title: "Cardiac Risk Prediction",
    tagline: "Clinical ML pipeline",
    desc: "End-to-end ML system predicting infant cardiac arrest from ICU data. SHAP-based explainability layer makes model decisions interpretable by clinicians.",
    tags: ["Python", "scikit-learn", "XGBoost", "SHAP", "Flask"],
    metrics: ["87% F1-score", "10K+ records", "<2s inference"],
    github: "https://github.com/kadvaith234",
    live: "#",
    accent: "#8b5cf6",
    img: "ml",
  },
  {
    id: 3,
    title: "Real-Time Surveillance",
    tagline: "Computer vision pipeline",
    desc: "Custom YOLOv8 model fine-tuned on annotated CCTV footage. Optimized FFmpeg + OpenCV pipeline achieving 30+ FPS inference on live feeds.",
    tags: ["YOLOv8", "PyTorch", "OpenCV", "FFmpeg", "Ultralytics"],
    metrics: ["92%+ accuracy", "30+ FPS", "40% latency reduction"],
    github: "https://github.com/kadvaith234",
    live: "#",
    accent: "#22d3ee",
    img: "cv",
  },
];

function ProjectImage({ type, accent }: { type: string; accent: string }) {
  const patterns: Record<string, React.ReactElement> = {
    fullstack: (
      <svg width="100%" height="100%" viewBox="0 0 600 320" preserveAspectRatio="xMidYMid slice">
        <rect width="600" height="320" fill="#07091a"/>
        {/* Browser chrome */}
        <rect x="40" y="40" width="520" height="240" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        <rect x="40" y="40" width="520" height="32" rx="10" fill="rgba(255,255,255,0.05)"/>
        <rect x="40" y="62" width="520" height="10" fill="rgba(255,255,255,0.05)"/>
        <circle cx="62" cy="56" r="5" fill="#ff5f57" opacity=".7"/>
        <circle cx="78" cy="56" r="5" fill="#febc2e" opacity=".7"/>
        <circle cx="94" cy="56" r="5" fill="#28c840" opacity=".7"/>
        <rect x="120" y="49" width="180" height="14" rx="4" fill="rgba(255,255,255,0.06)"/>
        {/* UI elements */}
        <rect x="60" y="90" width="160" height="8" rx="3" fill={`${accent}40`}/>
        <rect x="60" y="108" width="240" height="6" rx="3" fill="rgba(255,255,255,0.06)"/>
        <rect x="60" y="124" width="200" height="6" rx="3" fill="rgba(255,255,255,0.04)"/>
        <rect x="60" y="148" width="90" height="28" rx="6" fill={`${accent}20`} stroke={`${accent}40`} strokeWidth="1"/>
        <rect x="160" y="148" width="90" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        {/* Card grid */}
        <rect x="60" y="198" width="135" height="60" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
        <rect x="207" y="198" width="135" height="60" rx="8" fill={`${accent}0a`} stroke={`${accent}20`} strokeWidth="1"/>
        <rect x="354" y="198" width="135" height="60" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
        {[0,1,2].map(i => (
          <g key={i}>
            <rect x={68+i*147} y="208" width="50" height="5" rx="2" fill={i===1?`${accent}60`:"rgba(255,255,255,0.12)"}/>
            <rect x={68+i*147} y="222" width="80" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
            <rect x={68+i*147} y="236" width="60" height="4" rx="2" fill="rgba(255,255,255,0.04)"/>
          </g>
        ))}
      </svg>
    ),
    ml: (
      <svg width="100%" height="100%" viewBox="0 0 600 320" preserveAspectRatio="xMidYMid slice">
        <rect width="600" height="320" fill="#07091a"/>
        {/* Neural net diagram */}
        {[0,1,2,3].map(i => [80+i*140, [110,160,210], [85,135,185,235]].map((x, _, arr) => {
          const cx2 = x as number;
          const ys = i < 2 ? [110,160,210] : i === 2 ? [85,135,185,235] : [135,185];
          return ys.map((cy: number) => (
            <circle key={`${i}-${cy}`} cx={cx2} cy={cy} r={i===0||i===3?10:12} fill={`${accent}${i===2?"30":"18"}`} stroke={`${accent}${i===2?"60":"30"}`} strokeWidth="1"/>
          ));
        }))}
        {/* Connections */}
        {[110,160,210].map((y1: number) => [85,135,185,235].map((y2: number) => (
          <line key={`${y1}-${y2}`} x1="220" y1={y1} x2="360" y2={y2} stroke={`${accent}18`} strokeWidth=".7"/>
        )))}
        {[85,135,185,235].map((y1: number) => [135,185].map((y2: number) => (
          <line key={`${y1}-${y2}`} x1="360" y1={y1} x2="500" y2={y2} stroke={`${accent}22`} strokeWidth=".7"/>
        )))}
        {/* SHAP bars */}
        <rect x="60" y="258" width="480" height="36" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
        {[.9,.7,.85,.6,.75,.5,.8].map((v,i) => (
          <rect key={i} x={68+i*65} y="265" width={v*55} height="8" rx="2" fill={`${accent}${Math.round(v*80+30).toString(16)}`}/>
        ))}
        <text x="70" y="295" fill="rgba(255,255,255,0.18)" fontSize="9" fontFamily="'JetBrains Mono',monospace">SHAP feature importance</text>
      </svg>
    ),
    cv: (
      <svg width="100%" height="100%" viewBox="0 0 600 320" preserveAspectRatio="xMidYMid slice">
        <rect width="600" height="320" fill="#07091a"/>
        {/* Video frame */}
        <rect x="40" y="40" width="340" height="240" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
        {/* Detection boxes */}
        <rect x="80" y="75" width="85" height="110" rx="3" fill="none" stroke={`${accent}`} strokeWidth="1.5" opacity=".8"/>
        <rect x="80" y="65" width="70" height="12" rx="2" fill={`${accent}dd`}/>
        <text x="84" y="74" fill="#04050d" fontSize="8" fontWeight="600" fontFamily="'JetBrains Mono',monospace">person 0.97</text>
        <rect x="215" y="90" width="110" height="140" rx="3" fill="none" stroke="#8b5cf6" strokeWidth="1.5" opacity=".7"/>
        <rect x="215" y="80" width="85" height="12" rx="2" fill="#8b5cf6dd"/>
        <text x="219" y="89" fill="#fff" fontSize="8" fontWeight="600" fontFamily="'JetBrains Mono',monospace">vehicle 0.94</text>
        {/* Scanline */}
        <line x1="40" y1="165" x2="380" y2="165" stroke={`${accent}50`} strokeWidth="1" strokeDasharray="4 4"/>
        {/* Right panel: stats */}
        <rect x="400" y="40" width="160" height="240" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
        <text x="415" y="65" fill="rgba(255,255,255,0.3)" fontSize="8" letterSpacing="2" fontFamily="'JetBrains Mono',monospace">METRICS</text>
        {[["FPS","32"],["mAP","92.4%"],["Latency","31ms"],["Classes","10"]].map(([k,v],i) => (
          <g key={k}>
            <text x="415" y={90+i*38} fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="'JetBrains Mono',monospace">{k}</text>
            <text x="415" y={108+i*38} fill={i===0?`${accent}`:"rgba(255,255,255,0.75)"} fontSize="16" fontFamily="'Syne',sans-serif" fontWeight="700">{v}</text>
          </g>
        ))}
      </svg>
    ),
  };
  return <div style={{ width:"100%", height:"100%", overflow:"hidden" }}>{patterns[type]}</div>;
}

export default function Projects() {
  const [hovered, setHovered] = useState<number|null>(null);

  return (
    <section id="projects" style={{ padding:"7rem 0", borderTop:"1px solid var(--border)" }}>
      <div style={{ maxWidth:"1080px", margin:"0 auto", padding:"0 2.5rem" }}>

        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:"4rem", flexWrap:"wrap", gap:"1rem" }}>
          <div>
            <div className="section-label reveal">Work</div>
            <h2 className="reveal d1" style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(1.8rem,3vw,2.5rem)", fontWeight:800, letterSpacing:"-.03em", lineHeight:1.1 }}>
              Selected projects
            </h2>
          </div>
        </div>

        {/* Featured — large */}
        {PROJECTS.map((p, i) => (
          <div key={p.id} className={`proj-card reveal d${i+1}`}
            onMouseEnter={() => setHovered(p.id)} onMouseLeave={() => setHovered(null)}
            style={{
              display:"grid",
              gridTemplateColumns: i%2===0 ? "1.1fr 1fr" : "1fr 1.1fr",
              background:"var(--surface)",
              border:"1px solid var(--border)",
              borderRadius:"18px",
              overflow:"hidden",
              marginBottom:"1.5rem",
              transition:"border-color .3s, box-shadow .3s",
              borderColor: hovered===p.id ? `${p.accent}35` : "var(--border)",
              boxShadow: hovered===p.id ? `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${p.accent}20` : "none",
            }}>

            {/* Image — ORDER depends on index */}
            <div style={{ order: i%2===0 ? 0 : 1, background:"var(--bg2)", position:"relative", minHeight:"280px" }}>
              {/* Top-color accent */}
              <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:`linear-gradient(90deg,${p.accent},transparent)` }} />
              <ProjectImage type={p.img} accent={p.accent} />
            </div>

            {/* Info */}
            <div style={{ order: i%2===0 ? 1 : 0, padding:"2.5rem 2.5rem" }}>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".68rem", color:`${p.accent}`, letterSpacing:".1em", textTransform:"uppercase", marginBottom:".6rem", opacity:.75 }}>
                {String(i+1).padStart(2,"0")}
              </div>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.5rem", fontWeight:800, letterSpacing:"-.025em", marginBottom:".3rem" }}>{p.title}</h3>
              <div style={{ fontSize:".82rem", color:"var(--text-3)", marginBottom:"1.2rem", fontFamily:"'Instrument Sans',sans-serif" }}>{p.tagline}</div>
              <p style={{ color:"var(--text-2)", fontSize:".9rem", lineHeight:1.7, marginBottom:"1.5rem" }}>{p.desc}</p>

              {/* Metrics */}
              <div style={{ display:"flex", gap:".5rem", flexWrap:"wrap", marginBottom:"1.5rem" }}>
                {p.metrics.map(m => (
                  <span key={m} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".72rem", color:p.accent, background:`${p.accent}0d`, border:`1px solid ${p.accent}25`, padding:".22rem .6rem", borderRadius:"5px" }}>{m}</span>
                ))}
              </div>

              {/* Tech */}
              <div style={{ display:"flex", gap:".4rem", flexWrap:"wrap", marginBottom:"2rem" }}>
                {p.tags.map(t => <span key={t} className="chip">{t}</span>)}
              </div>

              <div style={{ display:"flex", gap:".75rem" }}>
                <a href={p.github} target="_blank" rel="noreferrer" className="btn-ghost" style={{ fontSize:".8rem", padding:".5rem 1rem" }}>GitHub ↗</a>
                <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize:".8rem", padding:".5rem 1rem" }}>Live →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:768px){.proj-card{grid-template-columns:1fr!important}.proj-card>div{order:unset!important}}`}</style>
    </section>
  );
}
