"use client";
const GROUPS = [
  { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "Java", "C"] },
  { label: "AI / ML", items: ["PyTorch", "scikit-learn", "YOLOv8", "SHAP", "XGBoost", "OpenCV", "Ultralytics"] },
  { label: "Web", items: ["Next.js", "React", "Node.js", "FastAPI", "Flask"] },
  { label: "Data", items: ["PostgreSQL", "MongoDB", "Supabase", "Redis", "NumPy", "Pandas"] },
  { label: "Infrastructure", items: ["Docker", "AWS (EC2/S3)", "Vercel", "Git", "Linux"] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding:"7rem 0", borderTop:"1px solid var(--border)" }}>
      <div style={{ maxWidth:"1080px", margin:"0 auto", padding:"0 2.5rem" }}>
        <div style={{ display:"grid", gridTemplateColumns:"200px 1fr", gap:"5rem", alignItems:"start" }} className="sk-grid">
          <div className="reveal" style={{ position:"sticky", top:"6rem" }}>
            <div className="section-label">Stack</div>
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:"2rem" }}>
            {GROUPS.map((g, i) => (
              <div key={g.label} className={`sk-row reveal d${(i%4)+1}`} style={{ display:"grid", gridTemplateColumns:"100px 1fr", gap:"1.5rem", alignItems:"baseline" }}>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".72rem", color:"var(--text-3)", letterSpacing:".06em" }}>{g.label}</div>
                <div style={{ display:"flex", gap:".4rem", flexWrap:"wrap" }}>
                  {g.items.map(s => (
                    <span key={s} className="chip" style={{ cursor:"default", transition:"all .2s" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(99,130,255,0.3)"; e.currentTarget.style.color="var(--text)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.color="var(--text-2)"; }}
                    >{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.sk-grid{grid-template-columns:1fr!important;gap:2rem!important}.sk-row{grid-template-columns:80px 1fr!important;gap:1rem!important}}`}</style>
    </section>
  );
}
