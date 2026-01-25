"use client";

import { useState, useCallback } from "react";
import { createFormControl, useFormState } from "react-hook-form";
import Button from "@/components/forms/Button";
import { contactForm } from "@/app/contact/form.config";

const { control, handleSubmit, register } = createFormControl({
  mode: "onChange",
  defaultValues: { name: "", email: "", phone: "", message: "" },
});

function FormState() {
  const { errors } = useFormState({ control });
  return errors;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const errors = FormState();

  const onSubmit = useCallback(async (data: Record<string, any>) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Contact form submitted:", data);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return (
    <>
      {submitSuccess && (
        <div
          style={{
            backgroundColor: "var(--color-accent-success)",
            color: "var(--color-text-inverse)",
            padding: "1rem",
            borderRadius: "var(--border-radius-md)",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          Thank you! We'll get back to you soon.
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {contactForm.fields.map((field: any) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "var(--color-text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              {field.label}
              {field.validation?.required && (
                <span style={{ color: "var(--color-accent-error)" }}> *</span>
              )}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                placeholder={field.placeholder}
                rows={4}
                {...register(field.name, field.validation)}
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  backgroundColor: "var(--color-bg-surface)",
                  border: "1px solid var(--color-border-primary)",
                  borderRadius: "var(--border-radius-md)",
                  color: "var(--color-text-primary)",
                  fontSize: "0.875rem",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "inherit",
                }}
                onFocus={e =>
                  (e.currentTarget.style.borderColor =
                    "var(--color-border-focus)")
                }
                onBlur={e =>
                  (e.currentTarget.style.borderColor =
                    "var(--color-border-primary)")
                }
              />
            ) : (
              <input
                id={field.name}
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.name, field.validation)}
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  backgroundColor: "var(--color-bg-surface)",
                  border: "1px solid var(--color-border-primary)",
                  borderRadius: "var(--border-radius-md)",
                  color: "var(--color-text-primary)",
                  fontSize: "0.875rem",
                  outline: "none",
                }}
                onFocus={e =>
                  (e.currentTarget.style.borderColor =
                    "var(--color-border-focus)")
                }
                onBlur={e =>
                  (e.currentTarget.style.borderColor =
                    "var(--color-border-primary)")
                }
              />
            )}

            {errors?.[field.name as keyof typeof errors] && (
              <span
                style={{
                  color: "var(--color-accent-error)",
                  fontSize: "0.75rem",
                  marginTop: "0.25rem",
                  display: "block",
                }}
              >
                {String(errors[field.name as keyof typeof errors]?.message)}
              </span>
            )}
          </div>
        ))}

        <Button type="submit" loading={isSubmitting} fullWidth>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </>
  );
}
