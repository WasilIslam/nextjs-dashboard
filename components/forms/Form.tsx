"use client";

import { useState, FormEvent, ReactNode } from "react";

interface FormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>, formData: FormData) => void | Promise<void>;
  children: ReactNode;
  className?: string;
  noValidate?: boolean;
}

export default function Form({ onSubmit, children, className = "", noValidate = false }: FormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if form is valid
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      // Trigger native validation UI
      form.reportValidity();
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData(form);
      await onSubmit(e, formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={className}
      noValidate={noValidate}
    >
      {children}
    </form>
  );
}
