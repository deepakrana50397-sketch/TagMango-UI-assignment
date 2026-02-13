"use client";

import { useTheme } from "next-themes";
import { IconButton } from "./IconButton";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // during SSR hydration, theme can be undefined; treat it safely
  const isDark = theme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  return (
    <IconButton label="Toggle theme" onClick={() => setTheme(nextTheme)}>
      <span aria-hidden="true">{isDark ? "☾" : "☀"}</span>
    </IconButton>
  );
}
