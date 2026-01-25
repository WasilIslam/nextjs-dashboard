"use client";

import { useState, useEffect } from "react";
import { FiMail, FiUser } from "react-icons/fi";

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValidationChange?: (isValid: boolean, errorMessage?: string) => void;
  type?: "text" | "email";
  placeholder?: string;
  required?: boolean;
  name?: string;
  id?: string;
  label?: string;
  className?: string;
  icon?: "mail" | "user" | "none";
}

export default function TextInput({
  value,
  onChange,
  onValidationChange,
  type = "text",
  placeholder = "",
  required = false,
  name,
  id,
  label,
  className = "",
  icon = "none",
}: TextInputProps) {
  const [error, setError] = useState<string>("");
  const [isValid, setIsValid] = useState(true);

  // Email validation regex
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validation effect
  useEffect(() => {
    let validationError = "";
    let valid = true;

    if (required && !value.trim()) {
      validationError = `${label || "This field"} is required`;
      valid = false;
    } else if (value && type === "email" && !validateEmail(value)) {
      validationError = "Please enter a valid email address";
      valid = false;
    }

    setError(validationError);
    setIsValid(valid);

    // Call the validation change callback if provided
    if (onValidationChange) {
      onValidationChange(valid, validationError);
    }
  }, [value, type, required, label, onValidationChange]);

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

  const hasIcon = icon !== "none";
  const leftPadding = hasIcon ? "3rem" : "1rem";

  return (
    <div className={className}>
      {label && (
        <label style={{
          display: "block",
          color: "var(--color-text-primary)",
          fontSize: "0.875rem",
          fontWeight: "500",
          marginBottom: "0.5rem",
        }}>
          {label}
        </label>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}>
        {hasIcon && (
          <div style={{
            position: "absolute",
            left: "1rem",
            color: "var(--color-text-secondary)",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            {getIcon()}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          id={id}
          required={required}
          style={{
            width: "100%",
            padding: `0.75rem ${hasIcon ? "1rem" : "1rem"} 0.75rem ${leftPadding}`,
            backgroundColor: "var(--color-bg-surface)",
            border: `1px solid ${!isValid ? "var(--color-accent-error)" : "var(--color-border-primary)"}`,
            borderRadius: "var(--border-radius-md)",
            color: "var(--color-text-primary)",
            fontSize: "0.875rem",
            outline: "none",
          }}
          onFocus={(e) => {
            if (isValid) {
              e.currentTarget.style.borderColor = "var(--color-border-focus)";
            }
          }}
          onBlur={(e) => {
            if (isValid) {
              e.currentTarget.style.borderColor = "var(--color-border-primary)";
            }
          }}
          placeholder={placeholder}
        />
      </div>
      {error && (
        <p style={{
          color: "var(--color-accent-error)",
          fontSize: "0.75rem",
          marginTop: "0.25rem",
          marginLeft: "0.25rem",
        }}>
          {error}
        </p>
      )}
    </div>
  );
}
