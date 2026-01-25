"use client";

import { ReactNode, useState } from "react";

interface FormFieldProps {
  name: string;
  label: string;
  children: (props: {
    name: string;
    id: string;
    required: boolean;
    "aria-describedby"?: string;
  }) => ReactNode;
  required?: boolean;
  className?: string;
  showRequiredIndicator?: boolean;
}

export default function FormField({
  name,
  label,
  children,
  required = false,
  className = "",
  showRequiredIndicator = true,
}: FormFieldProps) {
  const [errorId] = useState(`error-${name}-${Math.random().toString(36).substr(2, 9)}`);
  const inputId = `input-${name}`;

  return (
    <div className={className} style={{ marginBottom: "1rem" }}>
      <label
        htmlFor={inputId}
        style={{
          display: "block",
          color: "var(--color-text-primary)",
          fontSize: "0.875rem",
          fontWeight: "500",
          marginBottom: "0.5rem",
        }}
      >
        {label}
        {required && showRequiredIndicator && (
          <span
            style={{
              color: "var(--color-accent-error)",
              marginLeft: "0.25rem",
            }}
            aria-label="required"
          >
            *
          </span>
        )}
      </label>
      {children({
        name,
        id: inputId,
        required,
        "aria-describedby": errorId,
      })}
    </div>
  );
}
