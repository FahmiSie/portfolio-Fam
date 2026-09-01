"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="theme-toggle-placeholder" style={{ width: 40, height: 40 }} />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="theme-toggle"
      aria-label="Toggle Theme"
      title="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 90, scale: theme === "dark" ? 1 : 0, opacity: theme === "dark" ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ position: "absolute", display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <FiMoon size={20} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: theme === "light" ? 0 : -90, scale: theme === "light" ? 1 : 0, opacity: theme === "light" ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ position: "absolute", display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <FiSun size={20} />
      </motion.div>
    </button>
  );
}
