"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useRouter } from "next/navigation";
import { FiMenu, FiSun, FiMoon, FiUser, FiLogOut, FiSettings } from "react-icons/fi";
import { MdContrast } from "react-icons/md";
import Logo from "@/components/Logo";

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

export default function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  const toggleTheme = (selectedTheme: "light-mode" | "dark-mode" | "contrast-mode") => {
    setTheme(selectedTheme);
    setThemeMenuOpen(false);
  };

  return (
    <header
      style={{
        backgroundColor: "var(--color-bg-body)",
        position: "sticky",
        top: 0,
        zIndex: 30,
        marginLeft: "0",
      }}
      className="dashboard-header"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 1.5rem",
        }}
      >
        {/* Left Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button
            onClick={onMenuClick}
            style={{
              padding: "0.5rem",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--color-text-primary)",
              borderRadius: "var(--border-radius-md)",
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-bg-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <FiMenu size={24} />
          </button>

          <div style={{ display: "none" }} className="desktop-logo">
            <Logo />
          </div>

          <h1 style={{ fontSize: "1.25rem", fontWeight: "600", color: "var(--color-text-primary)" }} className="welcome-text">
            Welcome Back
          </h1>
        </div>

        {/* Right Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Theme Toggle */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setThemeMenuOpen(!themeMenuOpen)}
              style={{
                padding: "0.5rem",
                borderRadius: "var(--border-radius-md)",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-text-primary)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-bg-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              aria-label="Toggle theme"
            >
              {theme === "light-mode" && <FiSun size={20} />}
              {theme === "dark-mode" && <FiMoon size={20} />}
              {theme === "contrast-mode" && <MdContrast size={20} />}
            </button>

            {themeMenuOpen && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: "calc(100% + 0.5rem)",
                  backgroundColor: "var(--color-bg-card)",
                  border: "1px solid var(--color-border-primary)",
                  borderRadius: "var(--border-radius-md)",
                  boxShadow: "var(--shadow-lg)",
                  padding: "0.5rem",
                  minWidth: "150px",
                }}
              >
                {[
                  ["light-mode", <FiSun key="light" size={18} />, "Light"],
                  ["dark-mode", <FiMoon key="dark" size={18} />, "Dark"],
                  ["contrast-mode", <MdContrast key="contrast" size={18} />, "Contrast"],
                ].map(([mode, icon, label]) => (
                  <button
                    key={mode as string}
                    onClick={() => toggleTheme(mode as "light-mode" | "dark-mode" | "contrast-mode")}
                    style={{
                      width: "100%",
                      padding: "0.5rem 1rem",
                      backgroundColor: theme === mode ? "var(--color-bg-active)" : "transparent",
                      border: "none",
                      borderRadius: "var(--border-radius-sm)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "var(--color-text-primary)",
                      textAlign: "left",
                    }}
                  >
                    {icon}
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* User Menu */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              style={{
                padding: "0.5rem",
                borderRadius: "var(--border-radius-md)",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--color-text-primary)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-bg-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-accent-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-text-inverse)",
                }}
              >
                <FiUser size={18} />
              </div>
              <span style={{ fontSize: "0.875rem", fontWeight: "500" }} className="user-email">
                {user?.email?.split("@")[0] || "User"}
              </span>
            </button>

            {userMenuOpen && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: "calc(100% + 0.5rem)",
                  backgroundColor: "var(--color-bg-card)",
                  border: "1px solid var(--color-border-primary)",
                  borderRadius: "var(--border-radius-md)",
                  boxShadow: "var(--shadow-lg)",
                  padding: "0.5rem",
                  minWidth: "200px",
                }}
              >
                <div
                  style={{
                    padding: "0.75rem 1rem",
                    borderBottom: "1px solid var(--color-border-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  <p style={{ fontSize: "0.875rem", fontWeight: "500", color: "var(--color-text-primary)", marginBottom: "0.25rem" }}>
                    {user?.email?.split("@")[0] || "User"}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)" }}>{user?.email || "user@example.com"}</p>
                </div>

                <button
                  onClick={() => router.push("/dashboard/settings")}
                  style={{
                    width: "100%",
                    padding: "0.5rem 1rem",
                    backgroundColor: "transparent",
                    border: "none",
                    borderRadius: "var(--border-radius-sm)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--color-text-primary)",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-bg-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  <FiSettings size={18} />
                  Settings
                </button>

                <button
                  onClick={handleLogout}
                  style={{
                    width: "100%",
                    padding: "0.5rem 1rem",
                    backgroundColor: "transparent",
                    border: "none",
                    borderRadius: "var(--border-radius-sm)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--color-accent-error)",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-bg-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  <FiLogOut size={18} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .user-email {
            display: none;
          }
          .desktop-logo {
            display: none !important;
          }
          .welcome-text {
            display: block;
          }
        }

        @media (min-width: 768px) {
          .dashboard-header {
            margin-left: 280px;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .desktop-logo {
            display: flex !important;
          }
          .welcome-text {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
