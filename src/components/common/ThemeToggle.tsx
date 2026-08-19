"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`p-2 sm:p-2.5 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-slate-100 dark:bg-white/5 hover:bg-slate-200/80 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 active:scale-95 group relative flex items-center justify-center ${className}`}
      aria-label="Toggle Theme (Dark / Light)"
      title={mounted && theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {mounted && theme === "light" ? (
          <Moon
            size={16}
            className="text-slate-800 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500"
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
