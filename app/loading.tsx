"use client";

import Logo from "@/components/Logo";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "var(--color-bg-body)",
        gap: "2rem",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "80px",
          height: "80px",
          animation: "spin 2s linear infinite",
        }}
      >
        <Logo />
      </div>
      <p
        style={{
          color: "var(--color-text-secondary)",
          fontSize: "1rem",
        }}
      >
        Loading...
      </p>
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
