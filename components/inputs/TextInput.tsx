"use client";

import { FiMail, FiUser } from "react-icons/fi";

interface TextInputProps {
  type?: "text" | "email";
  placeholder?: string;
  required?: boolean;
  name?: string;
  id?: string;
  className?: string;
  icon?: "mail" | "user" | "none";
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

export default function TextInput({
  type = "text",
  placeholder = "",
  required = false,
  name,
  id,
  className = "",
  icon = "none",
  minLength,
  maxLength,
  pattern,
}: TextInputProps) {
  const getIcon = () => {
    switch (icon) {
      case "mail":
        return <FiMail size={18} />;
      case "user":
        return <FiUser size={18} />;
      default:
        return null;
    }
  };

  const leftPadding = icon !== "none" ? "1rem" : "1rem";
  const rightPadding = icon !== "none" ? "1rem" : "1rem";

  return (
    <div style={{
      position: "relative",
      display: "flex",
      alignItems: "center",
    }} className={className}>
      {icon !== "none" && (
        <div style={{
          position: "absolute",
          left: "0.75rem",
          color: "var(--color-text-secondary)",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}>
          {getIcon()}
        </div>
      )}
      <input
        type={type}
        name={name}
        id={id}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        style={{
          width: "100%",
          padding: `0.75rem ${rightPadding} 0.75rem ${icon !== "none" ? "2.5rem" : "1rem"}`,
          backgroundColor: "var(--color-bg-surface)",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "var(--border-radius-md)",
          color: "var(--color-text-primary)",
          fontSize: "0.875rem",
          outline: "none",
        }}
        onFocus={(e) => e.currentTarget.style.borderColor = "var(--color-border-focus)"}
        onBlur={(e) => e.currentTarget.style.borderColor = "var(--color-border-primary)"}
        placeholder={placeholder}
      />
    </div>
  );
}
