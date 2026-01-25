"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { Form, FormField, Button } from "@/components/forms";
import { TextInput, PasswordInput } from "@/components/inputs";
import Modal from "@/components/Modal";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
  onSwitchToForgotPassword: () => void;
}

export default function LoginModal({ isOpen, onClose, onSwitchToSignup, onSwitchToForgotPassword }: LoginModalProps) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent, formData: FormData) => {
    setError("");
    setLoading(true);

    try {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      await login(email, password);
      router.push("/dashboard");
      onClose();
    } catch (err) {
      setError("Failed to login. Please check your credentials.");
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
          Welcome Back
        </h2>
        <p
          style={{
            color: "var(--color-text-secondary)",
            fontSize: "0.875rem",
            marginBottom: "2rem",
          }}
        >
          Login to access your dashboard
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
              <PasswordInput name={name} id={id} required={required} placeholder="Enter your password" />
            )}
          </FormField>

          {/* Forgot Password Link */}
          <div style={{ textAlign: "right", marginBottom: "1.5rem" }}>
            <button
              type="button"
              onClick={onSwitchToForgotPassword}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--color-accent-primary)",
                fontSize: "0.875rem",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <Button type="submit" loading={loading} fullWidth>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Form>

        {/* Switch to Signup */}
        <p
          style={{
            marginTop: "1.5rem",
            textAlign: "center",
            color: "var(--color-text-secondary)",
            fontSize: "0.875rem",
          }}
        >
          Don't have an account?{" "}
          <button
            onClick={onSwitchToSignup}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--color-accent-primary)",
              cursor: "pointer",
              textDecoration: "underline",
              fontSize: "0.875rem",
            }}
          >
            Sign up
          </button>
        </p>
      </div>
    </Modal>
  );
}
