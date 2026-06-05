"use client";
const EXP = [
  {
    period: "Aug – Sep 2025",
    role: "Research Engineer",
    org: "IIIT Hyderabad",
    bullets: [
      "Built real-time CCTV detection system — YOLOv8, 92%+ mAP, 30+ FPS",
      "Reduced pipeline latency 40% via FFmpeg + OpenCV optimization",
      "Fine-tuned on 5K+ annotated frames, +18% over baseline",
    ],
    tags: ["YOLOv8", "PyTorch", "OpenCV"],
  },
  {
    period: "May – Jun 2025",
    role: "Research Engineer",
    org: "IIIT Kottayam",
    bullets: [
      "ML pipeline on 10K+ ICU records — 87% F1-score on cardiac risk",
      "SHAP explainability across 20+ clinical features",
      "Deployed as Flask API, <2s inference",
    ],
    tags: ["scikit-learn", "SHAP", "Flask"],
  },
  {
    period: "Oct 2024 – Mar 2025",
    role: "AI/ML Trainee",
    org: "IIIT Hyderabad",
    bullets: [
      "6-month intensive — 5+ models on real-world datasets, up to 90% accuracy",
    ],
    tags: ["PyTorch", "Deep Learning"],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding:"7rem 0", borderTop:"1px solid var(--border)" }}>
      <div style={{ maxWidth:"1080px", margin:"0 auto", padding:"0 2.5rem" }}>
        <div style={{ display:"grid", gridTemplateColumns:"200px 1fr", gap:"5rem", alignItems:"start" }} className="exp-grid">
          <div className="reveal" style={{ position:"sticky", top:"6rem" }}>
            <div className="section-label">Experience</div>
          </div>

          <div>
            {EXP.map((e, i) => (
              <div key={i} className={`reveal d${i+1}`} style={{
                display:"grid", gridTemplateColumns:"160px 1fr", gap:"2.5rem",
                paddingBottom: i < EXP.length-1 ? "3rem" : 0,
                marginBottom: i < EXP.length-1 ? "3rem" : 0,
                borderBottom: i < EXP.length-1 ? "1px solid var(--border)" : "none",
              }}>
                <div>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".72rem", color:"var(--text-3)", letterSpacing:".04em", marginBottom:".5rem" }}>{e.period}</div>
                  <div style={{ fontFamily:"'Instrument Sans',sans-serif", fontSize:".85rem", fontWeight:600, color:"var(--blue)", marginBottom:".2rem" }}>{e.org}</div>
                </div>
                <div>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"1rem", fontWeight:700, marginBottom:".8rem" }}>{e.role}</div>
                  <ul style={{ listStyle:"none", marginBottom:"1rem" }}>
                    {e.bullets.map((b, bi) => (
                      <li key={bi} style={{ display:"flex", gap:".6rem", color:"var(--text-2)", fontSize:".88rem", lineHeight:1.65, marginBottom:".35rem" }}>
                        <span style={{ color:"var(--blue)", flexShrink:0, marginTop:".12rem", fontSize:".7rem" }}>›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display:"flex", gap:".4rem", flexWrap:"wrap" }}>
                    {e.tags.map(t => <span key={t} className="chip chip-blue">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.exp-grid{grid-template-columns:1fr!important;gap:2rem!important}.exp-row{grid-template-columns:1fr!important;gap:.75rem!important}}`}</style>
    </section>
  );
}
