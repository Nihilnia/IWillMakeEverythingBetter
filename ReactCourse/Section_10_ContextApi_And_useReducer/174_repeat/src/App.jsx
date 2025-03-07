import Container from "./components/Container";
import Button from "./components/Button";

import ExampleContextProvider from "./store/ExampleContext";
import { ExampleContext } from "./store/ExampleContext";
import { useContext } from "react";

function AppContent() {
  const { toggleTheme } = useContext(ExampleContext);

  return (
    <Container>
      <h2>Its a basic container</h2>
      <Button label="Toggle" onClick={toggleTheme} />
    </Container>
  );
}

export default function App() {
  return (
    <ExampleContextProvider>
      <AppContent />
    </ExampleContextProvider>
  );
}
