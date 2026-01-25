"use client";

import { useState, useCallback } from "react";
import type { JSX } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { MdContrast } from "react-icons/md";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuthModal } from "@/contexts/AuthModalContext";
import Logo from "@/components/Logo";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const THEME_OPTIONS: Array<["light-mode" | "dark-mode" | "contrast-mode", JSX.Element]> = [
  ["light-mode", <FiSun key="light" size={18} />],
  ["dark-mode", <FiMoon key="dark" size={18} />],
  ["contrast-mode", <MdContrast key="contrast" size={18} />],
];

const linkStyle = {
  color: "var(--color-text-secondary)",
  textDecoration: "none",
  transition: "color 0.2s",
  cursor: "pointer",
};

const hoverLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.currentTarget.style.color = "var(--color-text-primary)";
};

const leaveLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.currentTarget.style.color = "var(--color-text-secondary)";
};

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { openModal } = useAuthModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  const toggleTheme = useCallback((t: "light-mode" | "dark-mode" | "contrast-mode") => {
    setTheme(t);
    setThemeMenuOpen(false);
  }, [setTheme]);

  const toggleMobileMenu = useCallback(() => setMobileMenuOpen(p => !p), []);
  const toggleThemeMenu = useCallback(() => setThemeMenuOpen(p => !p), []);

  return (
    <header style={{
      backgroundColor: "var(--color-bg-card)",
      borderBottom: "1px solid var(--color-border-primary)",
      position: "sticky",
      top: 0,
      zIndex: 50,
    }}>
      <nav style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "1rem 1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Logo />

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          {/* Desktop Nav */}
          <div className="desktop-nav" style={{ display: "none", gap: "1.5rem" }}>
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={linkStyle}
                onMouseEnter={hoverLink}
                onMouseLeave={leaveLink}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Auth */}
          <div className="desktop-auth" style={{ display: "none", gap: "0.75rem" }}>
            <button
              onClick={() => openModal("login")}
              style={{
                padding: "0.5rem 1.25rem",
                backgroundColor: "transparent",
                color: "var(--color-text-primary)",
                border: "1px solid var(--color-border-primary)",
                borderRadius: "var(--border-radius-md)",
                cursor: "pointer",
                fontSize: "0.875rem",
                fontWeight: "500",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = "var(--color-bg-hover)";
                e.currentTarget.style.borderColor = "var(--color-border-secondary)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "var(--color-border-primary)";
              }}
            >
              Login
            </button>
            <button
              onClick={() => openModal("signup")}
              style={{
                padding: "0.5rem 1.25rem",
                backgroundColor: "var(--color-accent-primary)",
                color: "var(--color-text-inverse)",
                border: "none",
                borderRadius: "var(--border-radius-md)",
                cursor: "pointer",
                fontSize: "0.875rem",
                fontWeight: "500",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--color-accent-primary-hover)")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--color-accent-primary)")}
            >
              Sign Up
            </button>
          </div>

          {/* Theme Toggle */}
          <div style={{ position: "relative" }}>
            <button
              onClick={toggleThemeMenu}
              style={{
                padding: "0.5rem",
                borderRadius: "var(--border-radius-md)",
                backgroundColor: "var(--color-bg-hover)",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-text-primary)",
              }}
              aria-label="Toggle theme"
            >
              {theme === "light-mode" && <FiSun size={20} />}
              {theme === "dark-mode" && <FiMoon size={20} />}
              {theme === "contrast-mode" && <MdContrast size={20} />}
            </button>

            {themeMenuOpen && (
              <div style={{
                position: "absolute",
                right: 0,
                top: "calc(100% + 0.5rem)",
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border-primary)",
                borderRadius: "var(--border-radius-md)",
                boxShadow: "var(--shadow-lg)",
                padding: "0.5rem",
                minWidth: "150px",
              }}>
                {THEME_OPTIONS.map(([t, icon]) => (
                  <button
                    key={t}
                    onClick={() => toggleTheme(t)}
                    style={{
                      width: "100%",
                      padding: "0.5rem 1rem",
                      backgroundColor: theme === t ? "var(--color-bg-active)" : "transparent",
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
                    {t.split("-")[0].charAt(0).toUpperCase() + t.split("-")[0].slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            style={{
              padding: "0.5rem",
              borderRadius: "var(--border-radius-md)",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--color-text-primary)",
            }}
            className="mobile-menu-btn"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          padding: "1rem 1.5rem",
          borderTop: "1px solid var(--color-border-primary)",
          backgroundColor: "var(--color-bg-card)",
        }} className="mobile-nav">
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  padding: "0.5rem",
                }}
              >
                {link.label}
              </a>
            ))}

            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              marginTop: "0.5rem",
              paddingTop: "1rem",
              borderTop: "1px solid var(--color-border-primary)",
            }}>
              <button
                onClick={() => {
                  openModal("login");
                  setMobileMenuOpen(false);
                }}
                style={{
                  padding: "0.625rem 1rem",
                  backgroundColor: "transparent",
                  color: "var(--color-text-primary)",
                  border: "1px solid var(--color-border-primary)",
                  borderRadius: "var(--border-radius-md)",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                }}
              >
                Login
              </button>
              <button
                onClick={() => {
                  openModal("signup");
                  setMobileMenuOpen(false);
                }}
                style={{
                  padding: "0.625rem 1rem",
                  backgroundColor: "var(--color-accent-primary)",
                  color: "var(--color-text-inverse)",
                  border: "none",
                  borderRadius: "var(--border-radius-md)",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-auth {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-nav {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
