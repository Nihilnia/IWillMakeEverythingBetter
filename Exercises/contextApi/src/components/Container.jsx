import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";

export default function Container() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <h2>It' s a simple container, Claude!</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
