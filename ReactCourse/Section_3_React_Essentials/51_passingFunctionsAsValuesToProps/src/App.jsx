import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";

import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton.jsx";

const user = {
  name: "",
  lastName: "",
  loggedIn: false,
};

console.log(user);

function App() {
  function handleSelect() {
    console.log("Hello Gloria.");
    user.name = "ABC";
    user.lastName = "DEF";
    user.loggedIn = true;
    console.log(user);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            {/* Shorter way */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
