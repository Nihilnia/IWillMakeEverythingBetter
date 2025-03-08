import ThemeContextProvider from "./store/ThemeContext";
import Container from "./components/Container";

export default function App() {
  return (
    <ThemeContextProvider>
      <Container />
    </ThemeContextProvider>
  );
}
