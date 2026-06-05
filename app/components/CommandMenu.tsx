"use client";
import { useState } from "react";
const CMDS = [
  { label:"Go to Work", icon:"→", href:"#projects" },
  { label:"Go to About", icon:"→", href:"#about" },
  { label:"Go to Experience", icon:"→", href:"#experience" },
  { label:"Go to Stack", icon:"→", href:"#skills" },
  { label:"Go to Writing", icon:"→", href:"#research" },
  { label:"Go to Contact", icon:"→", href:"#contact" },
  { label:"Email", icon:"↗", href:"mailto:kadvaith234@gmail.com", ext:true },
  { label:"GitHub", icon:"↗", href:"https://github.com/kadvaith234", ext:true },
  { label:"LinkedIn", icon:"↗", href:"https://linkedin.com", ext:true },
];
export default function CommandMenu({ open, onClose }: { open:boolean; onClose:()=>void }) {
  const [q,setQ]=useState(""); const [a,setA]=useState(0);
  const filtered=CMDS.filter(c=>c.label.toLowerCase().includes(q.toLowerCase()));
  const run=(c:typeof CMDS[0])=>{ if(c.ext)window.open(c.href,"_blank"); else document.querySelector(c.href)?.scrollIntoView({behavior:"smooth"}); onClose(); setQ(""); };
  if(!open)return null;
  return (
    <div id="cmd-overlay" className="open" onClick={onClose}>
      <div id="cmd-box" onClick={e=>e.stopPropagation()}>
        <div style={{ padding:".75rem 1rem", borderBottom:"1px solid var(--border)", display:"flex", alignItems:"center", gap:".75rem" }}>
          <span style={{ color:"var(--text-3)", fontSize:".9rem" }}>⌘</span>
          <input autoFocus value={q} onChange={e=>{setQ(e.target.value);setA(0);}}
            onKeyDown={e=>{ if(e.key==="ArrowDown")setA(a=>Math.min(a+1,filtered.length-1)); if(e.key==="ArrowUp")setA(a=>Math.max(a-1,0)); if(e.key==="Enter"&&filtered[a])run(filtered[a]); }}
            placeholder="Search..." style={{ flex:1, background:"none", border:"none", outline:"none", color:"var(--text)", fontSize:".9rem", fontFamily:"'Instrument Sans',sans-serif" }}/>
          <kbd style={{ background:"rgba(255,255,255,0.04)", border:"1px solid var(--border)", borderRadius:"5px", padding:".18rem .45rem", fontSize:".68rem", color:"var(--text-3)", fontFamily:"'JetBrains Mono',monospace" }}>ESC</kbd>
        </div>
        <div style={{ padding:".4rem" }}>
          {filtered.map((c,i)=>(
            <button key={c.label} onClick={()=>run(c)} onMouseEnter={()=>setA(i)}
              style={{ display:"flex", alignItems:"center", gap:".75rem", width:"100%", padding:".6rem .75rem", borderRadius:"8px", background:i===a?"rgba(255,255,255,0.05)":"none", border:"none", cursor:"pointer", textAlign:"left", color:"var(--text)", fontSize:".88rem", fontFamily:"'Instrument Sans',sans-serif", transition:"background .1s" }}>
              <span style={{ color:"var(--blue)", fontSize:".75rem", width:"1rem" }}>{c.icon}</span>
              {c.label}
            </button>
          ))}
        </div>
        <div style={{ borderTop:"1px solid var(--border)", padding:".4rem .75rem", display:"flex", gap:"1rem", fontSize:".68rem", color:"var(--text-3)", fontFamily:"'JetBrains Mono',monospace" }}>
          <span>↑↓ navigate</span><span>↵ open</span><span>ESC close</span>
        </div>
      </div>
    </div>
  );
}
