import { useState } from "react";
import UserInput from "./components/UserInput";
import Result from "./components/Result.jsx";

import * as util from "./util/investment.js";

function App() {
  const [userIntel, setUserIntel] = useState({});

  function handleUserIntel(symbol, arg) {
    setUserIntel((prev) => {
      return { ...prev, [symbol]: arg };
    });
  }

  console.log(userIntel);

  return (
    <>
      <h1>React Investment Calculator</h1>
      <h2></h2>
      <section id="user-input" className="input-group">
        <UserInput
          title="Initial Investment"
          getUserIntel={handleUserIntel}
          symbol="initialInvestment"
        />
        <UserInput
          title="Annual Investment"
          getUserIntel={handleUserIntel}
          symbol="annualInvestment"
        />
        <UserInput
          title="Expected Return"
          getUserIntel={handleUserIntel}
          symbol="expectedReturn"
        />
        <UserInput
          title="Duration"
          getUserIntel={handleUserIntel}
          symbol="year"
        />
      </section>
      <section id="result">
        <Result daResult={userIntel} />
      </section>
    </>
  );
}

export default App;
