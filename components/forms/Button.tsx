"use client";

import { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  variant?: "primary" | "secondary" | "danger";
}

export default function Button({
  type = "button",
  children,
  loading = false,
  disabled = false,
  onClick,
  className = "",
  fullWidth = false,
  variant = "primary",
}: ButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "secondary":
        return {
          backgroundColor: "var(--color-bg-surface)",
          color: "var(--color-text-primary)",
          border: "1px solid var(--color-border-primary)",
        };
      case "danger":
        return {
          backgroundColor: "var(--color-accent-error)",
          color: "var(--color-text-inverse)",
          border: "none",
        };
      default: // primary
        return {
          backgroundColor: "var(--color-accent-primary)",
          color: "var(--color-text-inverse)",
          border: "none",
        };
    }
  };

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={className}
      style={{
        ...getVariantStyles(),
        width: fullWidth ? "100%" : "auto",
        padding: "0.75rem 1.5rem",
        borderRadius: "var(--border-radius-md)",
        fontSize: "1rem",
        fontWeight: "500",
        cursor: isDisabled ? "not-allowed" : "pointer",
        transition: "all 0.2s",
        opacity: isDisabled ? 0.6 : 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
      }}
      onMouseEnter={(e) => {
        if (!isDisabled) {
          if (variant === "primary") {
            e.currentTarget.style.backgroundColor = "var(--color-accent-primary-hover)";
          } else if (variant === "danger") {
            e.currentTarget.style.opacity = "0.8";
          }
        }
      }}
      onMouseLeave={(e) => {
        if (!isDisabled) {
          if (variant === "primary") {
            e.currentTarget.style.backgroundColor = "var(--color-accent-primary)";
          } else if (variant === "danger") {
            e.currentTarget.style.opacity = "1";
          }
        }
      }}
    >
      {loading && (
        <div
          style={{
            width: "1rem",
            height: "1rem",
            border: "2px solid transparent",
            borderTop: "2px solid currentColor",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
      )}
      {children}
    </button>
  );
}
