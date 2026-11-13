"use client";

import { useEffect, useState } from "react";

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      // Stamp the choice with today's local date so it holds for the rest of
      // the day, then the clock default takes back over on the next visit.
      localStorage.setItem("theme", (next ? "dark" : "light") + "|" + new Date().toDateString());
    } catch {}
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={dark}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed right-4 top-4 z-30 inline-flex items-center gap-1 rounded-full border border-black/15 bg-white/80 p-1 shadow-lg shadow-black/5 backdrop-blur-md transition-colors hover:border-black/30 dark:border-white/20 dark:bg-white/10 dark:shadow-black/30 dark:hover:border-white/40 sm:right-6 sm:top-6"
    >
      {/* Segmented light/dark switch — both options always visible, the active
          side filled so it reads at a glance as a theme control. */}
      <span
        className={`inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
          dark ? "text-zinc-400" : "bg-[#f5c518] text-[#1b3b6f] shadow-sm"
        }`}
      >
        <SunIcon />
      </span>
      <span
        className={`inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
          dark ? "bg-[#1b3b6f] text-white shadow-sm" : "text-zinc-400"
        }`}
      >
        <MoonIcon />
      </span>
    </button>
  );
}
