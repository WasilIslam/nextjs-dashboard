"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiChevronDown, FiChevronRight, FiX } from "react-icons/fi";
import Logo from "@/components/Logo";
import { sidebarConfig } from "@/config/sidebar.config";

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DashboardSidebar({ isOpen, onClose }: DashboardSidebarProps) {
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const router = useRouter();

  const toggleMenu = (menuId: string) => {
    setExpandedMenus((prev) =>
      prev.includes(menuId)
        ? prev.filter((id) => id !== menuId)
        : [...prev, menuId]
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 40,
          }}
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          width: "280px",
          backgroundColor: "var(--color-bg-body)",
          display: "flex",
          flexDirection: "column",
          zIndex: 50,
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
        }}
        className="sidebar"
      >
        {/* Sidebar Header */}
        <div
          style={{
            padding: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Logo />
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--color-text-secondary)",
              cursor: "pointer",
              padding: "0.5rem",
            }}
            className="close-btn"
            aria-label="Close sidebar"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <nav
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "1rem",
          }}
        >
          {sidebarConfig.items.map((item) => (
            <div key={item.id} style={{ marginBottom: "0.5rem" }}>
              {/* Main Item */}
              <button
                onClick={() => {
                  if (item.subItems) {
                    toggleMenu(item.id);
                  } else if (item.href) {
                    router.push(item.href);
                  }
                }}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.75rem 1rem",
                  backgroundColor: "transparent",
                  border: "none",
                  borderRadius: "var(--border-radius-md)",
                  color: "var(--color-text-primary)",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                  textAlign: "left",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--color-bg-hover)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  {item.icon}
                  <span style={{ fontSize: "0.875rem", fontWeight: "500" }}>
                    {item.label}
                  </span>
                </div>
                {item.subItems && (
                  <span style={{ color: "var(--color-text-secondary)" }}>
                    {expandedMenus.includes(item.id) ? (
                      <FiChevronDown size={16} />
                    ) : (
                      <FiChevronRight size={16} />
                    )}
                  </span>
                )}
              </button>

              {/* Sub Items */}
              {item.subItems && expandedMenus.includes(item.id) && (
                <div
                  style={{
                    marginTop: "0.25rem",
                    marginLeft: "2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  {item.subItems.map((subItem) => (
                    <a
                      key={subItem.id}
                      href={subItem.href}
                      style={{
                        padding: "0.5rem 1rem",
                        color: "var(--color-text-secondary)",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        borderRadius: "var(--border-radius-sm)",
                        transition: "all 0.2s",
                        display: "block",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "var(--color-bg-hover)";
                        e.currentTarget.style.color =
                          "var(--color-text-primary)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color =
                          "var(--color-text-secondary)";
                      }}
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div
          style={{
            padding: "1rem",
          }}
        >
          <div
            style={{
              padding: "0.75rem",
              backgroundColor: "var(--color-bg-surface)",
              borderRadius: "var(--border-radius-md)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--color-text-tertiary)",
              }}
            >
              {sidebarConfig.footer}
            </p>
          </div>
        </div>
      </aside>

      <style jsx>{`
        @media (min-width: 768px) {
          .sidebar {
            transform: translateX(0) !important;
          }
          .close-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
