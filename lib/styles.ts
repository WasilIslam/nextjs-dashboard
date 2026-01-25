import { CSSProperties } from "react";

// Common button styles
export const buttonStyles = {
  base: (fullWidth?: boolean): CSSProperties => ({
    padding: "0.5rem 1.25rem",
    borderRadius: "var(--border-radius-md)",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: "500",
    transition: "all 0.2s",
    width: fullWidth ? "100%" : "auto",
  }),

  primary: (): CSSProperties => ({
    ...buttonStyles.base(),
    backgroundColor: "var(--color-accent-primary)",
    color: "var(--color-text-inverse)",
    border: "none",
  }),

  secondary: (): CSSProperties => ({
    ...buttonStyles.base(),
    backgroundColor: "transparent",
    color: "var(--color-text-primary)",
    border: "1px solid var(--color-border-primary)",
  }),

  ghost: (): CSSProperties => ({
    padding: "0.5rem",
    borderRadius: "var(--border-radius-md)",
    backgroundColor: "var(--color-bg-hover)",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--color-text-primary)",
    transition: "background-color 0.2s",
  }),
};

// Common link styles
export const linkStyles = (isActive?: boolean): CSSProperties => ({
  color: isActive ? "var(--color-text-primary)" : "var(--color-text-secondary)",
  textDecoration: "none",
  transition: "color 0.2s",
  cursor: "pointer",
});

// Common menu item styles
export const menuItemStyles = (isActive?: boolean): CSSProperties => ({
  width: "100%",
  padding: "0.5rem 1rem",
  backgroundColor: isActive ? "var(--color-bg-active)" : "transparent",
  border: "none",
  borderRadius: "var(--border-radius-sm)",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  color: "var(--color-text-primary)",
  textAlign: "left",
  transition: "background-color 0.2s",
  fontSize: "0.875rem",
});
