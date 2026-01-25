// This script runs BEFORE React hydrates to prevent theme flash
export function getInitialTheme(): string {
  if (typeof window === "undefined") return "dark-mode";

  // Check localStorage first
  const saved = localStorage.getItem("theme");
  if (saved) return saved;

  // Check system preference
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark-mode";
  }

  return "light-mode";
}

export function initializeTheme(): void {
  // This runs in the browser before React
  const theme = getInitialTheme();
  document.documentElement.className = theme;
  document.documentElement.style.colorScheme = theme.includes("dark") ? "dark" : "light";
}
