import Gloria from "./components/Gloria.jsx";

import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <>
      <Gloria />
      <Header />
      <main>
        <AuthInputs />
      </main>
    </>
  );
}
