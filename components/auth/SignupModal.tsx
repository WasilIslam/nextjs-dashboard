"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { Form, FormField, Button } from "@/components/forms";
import { TextInput, PasswordInput } from "@/components/inputs";
import Modal from "@/components/Modal";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export default function SignupModal({ isOpen, onClose, onSwitchToLogin }: SignupModalProps) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent, formData: FormData) => {
    setError("");

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      await signup(email, password);
      router.push("/dashboard");
      onClose();
    } catch (err) {
      setError("Failed to create account. Email may already be in use.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="450px">
      <div style={{ padding: "2rem" }}>
        {/* Header */}
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "var(--color-text-primary)",
            marginBottom: "0.5rem",
          }}
        >
          Create Account
        </h2>
        <p
          style={{
            color: "var(--color-text-secondary)",
            fontSize: "0.875rem",
            marginBottom: "2rem",
          }}
        >
          Sign up to get started
        </p>

        {/* Error Message */}
        {error && (
          <div
            style={{
              backgroundColor: "var(--color-accent-error)",
              color: "var(--color-text-inverse)",
              padding: "0.75rem",
              borderRadius: "var(--border-radius-md)",
              marginBottom: "1rem",
              fontSize: "0.875rem",
            }}
          >
            {error}
          </div>
        )}

        {/* Form */}
        <Form onSubmit={handleSubmit}>
          {/* Email Input */}
          <FormField name="email" label="Email" required>
            {({ name, id, required }) => (
              <TextInput type="email" name={name} id={id} required={required} placeholder="Enter your email" icon="mail" />
            )}
          </FormField>

          {/* Password Input */}
          <FormField name="password" label="Password" required>
            {({ name, id, required }) => (
              <PasswordInput name={name} id={id} required={required} placeholder="Create a password" minLength={6} />
            )}
          </FormField>

          {/* Confirm Password Input */}
          <FormField name="confirmPassword" label="Confirm Password" required>
            {({ name, id, required }) => (
              <PasswordInput name={name} id={id} required={required} placeholder="Confirm your password" minLength={6} />
            )}
          </FormField>

          {/* Submit Button */}
          <Button type="submit" loading={loading} fullWidth>
            {loading ? "Creating account..." : "Sign Up"}
          </Button>
        </Form>

        {/* Switch to Login */}
        <p
          style={{
            marginTop: "1.5rem",
            textAlign: "center",
            color: "var(--color-text-secondary)",
            fontSize: "0.875rem",
          }}
        >
          Already have an account?{" "}
          <button
            onClick={onSwitchToLogin}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--color-accent-primary)",
              cursor: "pointer",
              textDecoration: "underline",
              fontSize: "0.875rem",
            }}
          >
            Login
          </button>
        </p>
      </div>
    </Modal>
  );
}
