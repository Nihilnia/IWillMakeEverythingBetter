import { createContext, useState } from "react";

export const ExampleContext = createContext({
  theme: "",
  toggleTheme: () => {},
});

export default function ExampleContextProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState("light");

  function handleCurrentTheme() {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  const ctxValues = {
    theme: currentTheme,
    toggleTheme: handleCurrentTheme,
  };

  return (
    <ExampleContext.Provider value={ctxValues}>
      {children}
    </ExampleContext.Provider>
  );
}
