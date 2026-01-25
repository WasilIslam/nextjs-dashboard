"use client";

import { appName, appDescription } from "@/app/config";
import Logo from "@/components/Logo";
import { useSmartNav } from "@/hooks/useSmartNav";

export default function NotFound() {
  const { goHome } = useSmartNav();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-bg-body)",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "2rem" }}>
        <Logo />
      </div>

      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "var(--color-text-primary)",
          marginBottom: "1rem",
        }}
      >
        404
      </h1>

      <h2
        style={{
          fontSize: "1.5rem",
          color: "var(--color-text-secondary)",
          marginBottom: "0.5rem",
        }}
      >
        Page Not Found
      </h2>

      <p
        style={{
          color: "var(--color-text-tertiary)",
          fontSize: "1rem",
          marginBottom: "2rem",
          maxWidth: "500px",
        }}
      >
        Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
      </p>

      <button
        onClick={goHome}
        style={{
          padding: "0.75rem 2rem",
          backgroundColor: "var(--color-accent-primary)",
          color: "var(--color-text-inverse)",
          border: "none",
          borderRadius: "var(--border-radius-md)",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "500",
          textDecoration: "none",
          transition: "background-color 0.2s",
          display: "inline-block",
        }}
        onMouseEnter={e =>
          (e.currentTarget.style.backgroundColor =
            "var(--color-accent-primary-hover)")
        }
        onMouseLeave={e =>
          (e.currentTarget.style.backgroundColor = "var(--color-accent-primary)")
        }
      >
        Back to Home
      </button>
    </div>
  );
}
