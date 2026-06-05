"use client";
export default function Research() {
  return (
    <section id="research" style={{ padding:"7rem 0", borderTop:"1px solid var(--border)" }}>
      <div style={{ maxWidth:"1080px", margin:"0 auto", padding:"0 2.5rem" }}>
        <div style={{ display:"grid", gridTemplateColumns:"200px 1fr", gap:"5rem", alignItems:"start" }} className="res-grid">
          <div className="reveal" style={{ position:"sticky", top:"6rem" }}>
            <div className="section-label">Writing</div>
          </div>

          <div className="reveal d1" style={{
            background:"var(--surface)",
            border:"1px solid var(--border)",
            borderRadius:"16px",
            padding:"2.5rem",
            position:"relative",
            overflow:"hidden",
            transition:"border-color .3s",
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor="rgba(139,92,246,0.3)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor="var(--border)")}
          >
            <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:"linear-gradient(90deg,#8b5cf6,transparent)" }} />
            <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:"1rem", flexWrap:"wrap" }}>
              <div style={{ flex:1 }}>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".68rem", color:"rgba(139,92,246,0.6)", letterSpacing:".1em", textTransform:"uppercase", marginBottom:"1rem" }}>
                  IEEE AISIIS 2026 · Accepted
                </div>
                <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.15rem", fontWeight:700, lineHeight:1.35, letterSpacing:"-.02em", marginBottom:"1rem", maxWidth:"560px" }}>
                  Modeling Non-Random Clinical Missingness for Interpretable ICU Event Risk Prediction
                </h3>
                <p style={{ color:"var(--text-2)", fontSize:".88rem", lineHeight:1.7, maxWidth:"520px", marginBottom:"1.5rem" }}>
                  Addresses the gap between model accuracy and clinical usability — combining non-random missingness modeling with SHAP-based feature attribution for ICU cardiac risk forecasting.
                </p>
                <div style={{ display:"flex", gap:".4rem", flexWrap:"wrap" }}>
                  {["ICU Risk Prediction", "Clinical ML", "Explainable AI", "Missing Data Modeling"].map(t => (
                    <span key={t} className="chip chip-violet">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.res-grid{grid-template-columns:1fr!important;gap:2rem!important}}`}</style>
    </section>
  );
}
