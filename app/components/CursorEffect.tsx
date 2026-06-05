"use client";
import { useEffect } from "react";
export default function CursorEffect() {
  useEffect(() => {
    const dot = document.getElementById("cur");
    const ring = document.getElementById("cur-ring");
    if (!dot || !ring) return;
    let rx = 0, ry = 0, mx = window.innerWidth/2, my = window.innerHeight/2;
    const mv = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; dot.style.left=mx+"px"; dot.style.top=my+"px"; };
    const enter = () => { dot.style.width="20px"; dot.style.height="20px"; dot.style.opacity=".4"; ring.style.borderColor="rgba(99,130,255,.5)"; };
    const leave = () => { dot.style.width="8px"; dot.style.height="8px"; dot.style.opacity="1"; ring.style.borderColor="rgba(99,130,255,.28)"; };
    let raf: number;
    const anim = () => { rx+=(mx-rx)*.1; ry+=(my-ry)*.1; ring.style.left=rx+"px"; ring.style.top=ry+"px"; raf=requestAnimationFrame(anim); };
    document.addEventListener("mousemove", mv);
    document.querySelectorAll("a,button").forEach(el => { el.addEventListener("mouseenter",enter); el.addEventListener("mouseleave",leave); });
    raf = requestAnimationFrame(anim);
    return () => { document.removeEventListener("mousemove",mv); cancelAnimationFrame(raf); };
  }, []);
  return (<><div id="cur"/><div id="cur-ring"/></>);
}
