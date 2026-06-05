"use client";
export default function Footer() {
  return (
    <footer style={{ borderTop:"1px solid var(--border)", padding:"2rem 2.5rem", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem" }}>
      <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:".85rem", color:"var(--text-3)" }}>
        Kambhampati Advaith<span style={{ color:"var(--blue)" }}>.</span>
      </div>
      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:".68rem", color:"var(--text-3)", letterSpacing:".04em" }}>
        Hyderabad · {new Date().getFullYear()}
      </div>
      <div style={{ display:"flex", gap:"1.5rem" }}>
        {[["GitHub","https://github.com/kadvaith234"],["LinkedIn","https://linkedin.com"],["Email","mailto:kadvaith234@gmail.com"]].map(([l,h]) => (
          <a key={l} href={h} target="_blank" rel="noreferrer" style={{ color:"var(--text-3)", fontSize:".8rem", textDecoration:"none", fontFamily:"'Instrument Sans',sans-serif", transition:"color .2s" }}
            onMouseEnter={e => (e.currentTarget.style.color="var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color="var(--text-3)")}
          >{l}</a>
        ))}
      </div>
    </footer>
  );
}
