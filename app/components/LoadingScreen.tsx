"use client";

export default function LoadingScreen({
  done,
}: {
  done: boolean;
}) {
  return (
    <div
      id="loading-screen"
      className={done ? "done" : ""}
    >
      <div className="portal-box" />
    </div>
  );
}