import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };

    const onEnter = () => { hovering.current = true; };
    const onLeave = () => { hovering.current = false; };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    let raf;
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top = ring.current.y + 'px';
        const s = hovering.current ? 2.2 : 1;
        ringRef.current.style.transform = `translate(-50%, -50%) scale(${s})`;
        ringRef.current.style.borderColor = hovering.current
          ? 'var(--accent)' : 'rgba(232,255,71,0.35)';
        ringRef.current.style.background = hovering.current
          ? 'rgba(232,255,71,0.06)' : 'transparent';
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', zIndex: 99999, pointerEvents: 'none',
        width: 7, height: 7, background: 'var(--accent)', borderRadius: '50%',
        transform: 'translate(-50%,-50%)',
        transition: 'transform 0.08s',
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', zIndex: 99998, pointerEvents: 'none',
        width: 38, height: 38,
        border: '1.5px solid rgba(232,255,71,0.35)',
        borderRadius: '50%',
        transform: 'translate(-50%,-50%)',
        transition: 'transform 0.25s cubic-bezier(0.25,0.46,0.45,0.94), border-color 0.2s, background 0.2s',
      }} />
    </>
  );
}
