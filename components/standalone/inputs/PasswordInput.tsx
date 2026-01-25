"use client";

import { useState } from "react";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  name?: string;
  id?: string;
  className?: string;
}

export default function PasswordInput({
  value,
  onChange,
  placeholder = "Enter your password",
  required = false,
  name,
  id,
  className = "",
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{
      position: "relative",
      display: "flex",
      alignItems: "center",
    }} className={className}>
      <FiLock style={{
        position: "absolute",
        left: "1rem",
        color: "var(--color-text-secondary)",
        zIndex: 1,
      }} size={18} />
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        required={required}
        style={{
          width: "100%",
          padding: "0.75rem 3rem 0.75rem 3rem",
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
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        style={{
          position: "absolute",
          right: "1rem",
          background: "transparent",
          border: "none",
          color: "var(--color-text-secondary)",
          cursor: "pointer",
          padding: "0.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
      </button>
    </div>
  );
}
