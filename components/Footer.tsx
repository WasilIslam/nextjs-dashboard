"use client";

import { memo, useMemo } from "react";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { appName } from "@/app/config";

const FOOTER_LINKS = {
  quick: [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  resources: [
    { href: "#docs", label: "Documentation" },
    { href: "#support", label: "Support" },
    { href: "#blog", label: "Blog" },
  ],
};

const SOCIAL_LINKS = [
  { icon: FiGithub, label: "GitHub", href: "#" },
  { icon: FiTwitter, label: "Twitter", href: "#" },
  { icon: FiLinkedin, label: "LinkedIn", href: "#" },
];

const linkStyle = {
  color: "var(--color-text-secondary)",
  textDecoration: "none",
  fontSize: "0.875rem",
  transition: "color 0.2s",
};

const FooterLink = memo(({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    style={linkStyle}
    onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent-primary)")}
    onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-secondary)")}
  >
    {label}
  </a>
));

FooterLink.displayName = "FooterLink";

const Footer = memo(() => (
  <footer style={{
    backgroundColor: "var(--color-bg-card)",
    borderTop: "1px solid var(--color-border-primary)",
    marginTop: "auto",
  }}>
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2rem",
        marginBottom: "2rem",
      }}>
        {/* Brand */}
        <div>
          <h3 style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            color: "var(--color-text-primary)",
            marginBottom: "1rem",
          }}>
            {appName}
          </h3>
          <p style={{
            color: "var(--color-text-secondary)",
            fontSize: "0.875rem",
            lineHeight: "1.5",
          }}>
            Template content for your next big project. Simple, clean, and ready to customize.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{
            fontSize: "1rem",
            fontWeight: "600",
            color: "var(--color-text-primary)",
            marginBottom: "1rem",
          }}>
            Quick Links
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {FOOTER_LINKS.quick.map(link => (
              <FooterLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <h4 style={{
            fontSize: "1rem",
            fontWeight: "600",
            color: "var(--color-text-primary)",
            marginBottom: "1rem",
          }}>
            Resources
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {FOOTER_LINKS.resources.map(link => (
              <FooterLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        paddingTop: "2rem",
        borderTop: "1px solid var(--color-border-primary)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }} className="footer-bottom">
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <p style={{
            color: "var(--color-text-secondary)",
            fontSize: "0.875rem",
          }}>
            © 2024 {appName}. All rights reserved.
          </p>

          {/* Social Links */}
          <div style={{ display: "flex", gap: "1rem" }}>
            {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent-primary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-secondary)")}
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      @media (max-width: 640px) {
        .footer-bottom > div {
          flex-direction: column;
          text-align: center;
        }
      }
    `}</style>
  </footer>
));

Footer.displayName = "Footer";
export default Footer;
