import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState("light");

  function handleCurrentTheme() {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  const ctxValues = {
    theme: currentTheme,
    toggleTheme: handleCurrentTheme,
  };

  return (
    <ThemeContext.Provider value={ctxValues}>{children}</ThemeContext.Provider>
  );
}
