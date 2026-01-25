"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light-mode" | "dark-mode" | "contrast-mode";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isLoaded: boolean;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark-mode");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Get theme that was set by the inline script
    const htmlTheme = document.documentElement.className as Theme;
    setThemeState(htmlTheme || "dark-mode");
    setIsLoaded(true);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isLoaded }}>
      {children}
    </ThemeContext.Provider>
  );
}
