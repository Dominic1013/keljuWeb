"use client";

import { createContext, useState } from "react";

// create a contextAPI
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
    console.log("button");
  };
  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      {/* className is a global class */}
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
