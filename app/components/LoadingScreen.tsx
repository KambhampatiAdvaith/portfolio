"use client";
export default function LoadingScreen({ done }: { done: boolean }) {
  return (
    <div id="loading-screen" className={done ? "done" : ""}>
      <div className="loader-name">Advaith</div>
      <div className="loader-bar"><div className="loader-fill" /></div>
    </div>
  );
}
