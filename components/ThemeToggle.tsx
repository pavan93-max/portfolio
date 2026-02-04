"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-14 h-8 rounded-full bg-gray-700 p-1">
        <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white" />
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full bg-gray-700 p-1 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-lg"
        animate={{
          x: theme === "dark" ? 0 : 24,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {theme === "dark" ? (
          <Moon className="w-4 h-4 text-gray-800" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-600" />
        )}
      </motion.div>
    </motion.button>
  );
}

