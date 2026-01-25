"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { FiMail } from "react-icons/fi";
import Modal from "@/components/Modal";

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBackToLogin: () => void;
}

export default function ForgotPasswordModal({ isOpen, onClose, onBackToLogin }: ForgotPasswordModalProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await resetPassword(email);
      setSuccess(true);
    } catch (err) {
      setError("Failed to send reset email. Please check your email address.");
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
          Reset Password
        </h2>
        <p
          style={{
            color: "var(--color-text-secondary)",
            fontSize: "0.875rem",
            marginBottom: "2rem",
          }}
        >
          Enter your email to receive a password reset link
        </p>

        {/* Success Message */}
        {success && (
          <div
            style={{
              backgroundColor: "var(--color-accent-success)",
              color: "var(--color-text-inverse)",
              padding: "0.75rem",
              borderRadius: "var(--border-radius-md)",
              marginBottom: "1rem",
              fontSize: "0.875rem",
            }}
          >
            Password reset email sent! Check your inbox.
          </div>
        )}

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

        {!success ? (
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  color: "var(--color-text-primary)",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  marginBottom: "0.5rem",
                }}
              >
                Email
              </label>
              <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <FiMail style={{ position: "absolute", left: "1rem", color: "var(--color-text-secondary)" }} size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem 0.75rem 3rem",
                    backgroundColor: "var(--color-bg-surface)",
                    border: "1px solid var(--color-border-primary)",
                    borderRadius: "var(--border-radius-md)",
                    color: "var(--color-text-primary)",
                    fontSize: "0.875rem",
                    outline: "none",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-border-focus)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border-primary)")}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "0.75rem",
                backgroundColor: loading ? "var(--color-bg-active)" : "var(--color-accent-primary)",
                color: "var(--color-text-inverse)",
                border: "none",
                borderRadius: "var(--border-radius-md)",
                fontSize: "1rem",
                fontWeight: "500",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!loading) e.currentTarget.style.backgroundColor = "var(--color-accent-primary-hover)";
              }}
              onMouseLeave={(e) => {
                if (!loading) e.currentTarget.style.backgroundColor = "var(--color-accent-primary)";
              }}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>
        ) : (
          <button
            onClick={onBackToLogin}
            style={{
              width: "100%",
              padding: "0.75rem",
              backgroundColor: "var(--color-accent-primary)",
              color: "var(--color-text-inverse)",
              border: "none",
              borderRadius: "var(--border-radius-md)",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-accent-primary-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--color-accent-primary)")}
          >
            Back to Login
          </button>
        )}

        {/* Back to Login Link */}
        {!success && (
          <p
            style={{
              marginTop: "1.5rem",
              textAlign: "center",
              color: "var(--color-text-secondary)",
              fontSize: "0.875rem",
            }}
          >
            Remember your password?{" "}
            <button
              onClick={onBackToLogin}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--color-accent-primary)",
                cursor: "pointer",
                textDecoration: "underline",
                fontSize: "0.875rem",
              }}
            >
              Back to login
            </button>
          </p>
        )}
      </div>
    </Modal>
  );
}
