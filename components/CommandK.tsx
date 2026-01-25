"use client";

import { useState, useEffect, useCallback } from "react";
import { FiSearch } from "react-icons/fi";
import Modal from "@/components/Modal";

interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  onSelect: () => void;
}

interface CommandKProps {
  items: CommandItem[];
}

export default function CommandK({ items }: CommandKProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = items.filter(
    (item) =>
      item.label.toLowerCase().includes(search.toLowerCase()) ||
      item.description?.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = useCallback(
    (item: CommandItem) => {
      item.onSelect();
      setOpen(false);
      setSearch("");
    },
    []
  );

  // Listen for Cmd/Ctrl + K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Modal isOpen={open} onClose={() => setOpen(false)} showCloseButton={false} maxWidth="640px">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "70vh",
        }}
      >
        {/* Search Input */}
        <div
          style={{
            padding: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            borderBottom: "1px solid var(--color-border-primary)",
          }}
        >
          <FiSearch size={20} style={{ color: "var(--color-text-secondary)" }} />
          <input
            autoFocus
            type="text"
            placeholder="Type a command or search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: 1,
              backgroundColor: "transparent",
              border: "none",
              color: "var(--color-text-primary)",
              fontSize: "1rem",
              outline: "none",
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setOpen(false);
              }
            }}
          />
          <kbd
            style={{
              padding: "0.25rem 0.5rem",
              backgroundColor: "var(--color-bg-surface)",
              border: "1px solid var(--color-border-primary)",
              borderRadius: "var(--border-radius-sm)",
              fontSize: "0.7rem",
              fontWeight: "500",
              color: "var(--color-text-tertiary)",
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "0.5rem",
          }}
        >
          {filtered.length === 0 ? (
            <div
              style={{
                padding: "3rem 1rem",
                textAlign: "center",
                color: "var(--color-text-tertiary)",
              }}
            >
              No results found
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                style={{
                  width: "100%",
                  padding: "0.875rem 1rem",
                  backgroundColor: "transparent",
                  border: "none",
                  borderRadius: "var(--border-radius-md)",
                  color: "var(--color-text-primary)",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background-color 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-bg-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {item.icon && (
                  <span style={{ color: "var(--color-text-secondary)", display: "flex" }}>
                    {item.icon}
                  </span>
                )}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.9rem", fontWeight: "500" }}>
                    {item.label}
                  </div>
                  {item.description && (
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--color-text-tertiary)",
                        marginTop: "0.125rem",
                      }}
                    >
                      {item.description}
                    </div>
                  )}
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </Modal>
  );
}
