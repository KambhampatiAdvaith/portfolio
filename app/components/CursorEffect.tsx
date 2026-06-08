"use client";

import { useEffect, useRef } from "react";

export default function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.closest(
          "a, button, input, textarea, .proj-card, .chip"
        )
      ) {
        cursor.classList.add("hover");
      } else {
        cursor.classList.remove("hover");
      }
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;

      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />

      <style>{`
        * {
          cursor: none !important;
        }

        .custom-cursor {
          position: fixed;

          width: 12px;
          height: 12px;

          border-radius: 50%;

          background: #6382ff;

          box-shadow:
            0 0 10px rgba(99,130,255,.8),
            0 0 25px rgba(99,130,255,.5),
            0 0 50px rgba(99,130,255,.25);

          pointer-events: none;

          z-index: 2147483647;

          transform: translate(-50%, -50%);

          transition:
            width .2s ease,
            height .2s ease,
            background .2s ease,
            box-shadow .2s ease;
        }

        .custom-cursor.hover {
          width: 24px;
          height: 24px;

          background: rgba(99,130,255,.15);

          border: 2px solid #6382ff;

          box-shadow:
            0 0 15px rgba(99,130,255,.9),
            0 0 35px rgba(99,130,255,.5);
        }

        @media (max-width: 768px) {
          .custom-cursor {
            display: none;
          }

          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
}