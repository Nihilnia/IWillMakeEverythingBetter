import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
import Header from "./components/Header/Header.jsx";
import Button from "./components/Button.jsx";
import PlusIcon from "./components/PlusIcon.jsx";

function App() {
  return (
    <>
      <Header />
      <Button Icon={PlusIcon}>asdasd</Button>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
