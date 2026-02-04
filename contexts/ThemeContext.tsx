"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    try {
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
        setTheme(savedTheme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(savedTheme);
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme = prefersDark ? "dark" : "light";
        setTheme(initialTheme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(initialTheme);
      }
    } catch (error) {
      // Fallback to dark
      setTheme("dark");
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      // Ignore localStorage errors
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

