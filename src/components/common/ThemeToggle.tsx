"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`p-2.5 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-slate-900/60 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-700/50 dark:border-white/10 text-slate-300 dark:text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 active:scale-95 group relative ${className}`}
      aria-label="Toggle Theme (Dark / Light)"
      title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {theme === "light" ? (
          <Moon
            size={16}
            className="text-slate-700 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500"
          />
        ) : (
          <Sun
            size={16}
            className="text-amber-400 transform rotate-90 group-hover:rotate-0 transition-transform duration-500"
          />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
