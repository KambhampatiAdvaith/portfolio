"use client";
import { useEffect, useRef } from "react";

const COLORS_HEX = ["4f8eff", "5a6aff", "7c3aed", "06b6d4", "3b82f6"];

function hexToRgb(h: string) {
  return `${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)}`;
}

interface FlowLine {
  sx: number; sy: number;
  pts: {x:number; y:number}[];
  alpha: number;
  colorIdx: number;
  width: number;
}

const FIXED_ATTRACTORS = [
  { fx: 0.18, fy: 0.28, strength: 9000 },
  { fx: 0.82, fy: 0.65, strength: 8000 },
  { fx: 0.55, fy: 0.10, strength: 6000 },
];

const DT = 2.4;
const STEPS = 55;

export default function TensorFlowField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0;
    let mx = -9999, my = -9999;
    let lines: FlowLine[] = [];
    let raf: number;
    let lastTrace = 0;
    let frameN = 0;
    const isMobile = window.innerWidth < 768;
    const NLINES = isMobile ? 80 : 160;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      initField();
    };

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const onLeave = () => { mx = -9999; my = -9999; };

    function initField() {
      lines = [];
      const cols = Math.floor(Math.sqrt(NLINES * W / H));
      const rows = Math.ceil(NLINES / cols);
      for (let i = 0; i < NLINES; i++) {
        const ci = i % cols;
        const ri = Math.floor(i / cols);
        lines.push({
          sx: ((ci + 0.5) / cols) * W + (Math.random() - 0.5) * 80,
          sy: ((ri + 0.5) / rows) * H + (Math.random() - 0.5) * 80,
          pts: [],
          alpha: 0.14 + Math.random() * 0.2,
          colorIdx: Math.floor(Math.random() * COLORS_HEX.length),
          width: 0.35 + Math.random() * 0.55,
        });
      }
    }

    function fieldAt(px: number, py: number) {
      let dx = 0, dy = 0;
      for (const a of FIXED_ATTRACTORS) {
        const ex = a.fx * W - px;
        const ey = a.fy * H - py;
        const d2 = ex * ex + ey * ey + 600;
        const f = a.strength / d2;
        dx += ex * f; dy += ey * f;
      }
      if (mx > -999) {
        const ex = mx - px;
        const ey = my - py;
        const d2 = ex * ex + ey * ey + 200;
        const f = 18000 / d2;
        dx += ex * f; dy += ey * f;
      }
      const angle = Math.atan2(dy, dx);
      return { vx: Math.cos(angle), vy: Math.sin(angle) };
    }

    function traceLines() {
      for (const line of lines) {
        line.pts = [];
        let x = line.sx, y = line.sy;
        for (let s = 0; s < STEPS; s++) {
          line.pts.push({ x, y });
          if (x < -30 || x > W + 30 || y < -30 || y > H + 30) break;
          const f = fieldAt(x, y);
          x += f.vx * DT;
          y += f.vy * DT;
        }
      }
    }

    function draw(ts: number) {
      raf = requestAnimationFrame(draw);
      frameN++;
      if (!ctx) return;
      const retrace = ts - lastTrace > (isMobile ? 80 : 45);
      if (retrace) { traceLines(); lastTrace = ts; }

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#060810";
      ctx.fillRect(0, 0, W, H);

      for (const line of lines) {
        if (line.pts.length < 2) continue;
        ctx.beginPath();
        ctx.moveTo(line.pts[0].x, line.pts[0].y);
        for (let i = 1; i < line.pts.length; i++) {
          ctx.lineTo(line.pts[i].x, line.pts[i].y);
        }
        ctx.strokeStyle = `rgba(${hexToRgb(COLORS_HEX[line.colorIdx])},${line.alpha})`;
        ctx.lineWidth = line.width;
        ctx.stroke();
      }

      // Attractor glows
      for (const a of FIXED_ATTRACTORS) {
        const ax = a.fx * W, ay = a.fy * H;
        const g = ctx.createRadialGradient(ax, ay, 0, ax, ay, 28);
        g.addColorStop(0, "rgba(79,142,255,0.22)");
        g.addColorStop(1, "rgba(79,142,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(ax, ay, 28, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "rgba(79,142,255,0.55)";
        ctx.beginPath(); ctx.arc(ax, ay, 2.2, 0, Math.PI * 2); ctx.fill();
      }

      // Cursor attractor glow
      if (mx > -999) {
        const g = ctx.createRadialGradient(mx, my, 0, mx, my, 50);
        g.addColorStop(0, "rgba(79,142,255,0.15)");
        g.addColorStop(0.5, "rgba(124,58,237,0.06)");
        g.addColorStop(1, "rgba(79,142,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(mx, my, 50, 0, Math.PI * 2); ctx.fill();
      }

      // Vignette
      const vig = ctx.createRadialGradient(W/2, H/2, H*0.28, W/2, H/2, H*0.88);
      vig.addColorStop(0, "transparent");
      vig.addColorStop(1, "rgba(6,8,16,0.78)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    resize();
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}
