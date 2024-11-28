"use client";

import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="theme__btn">
      {theme === "light" ? "🌞 Light Mode" : "🌜 Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
