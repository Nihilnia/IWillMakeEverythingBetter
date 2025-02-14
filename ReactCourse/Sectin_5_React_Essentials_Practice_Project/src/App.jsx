import Header from "./components/Header";
import headImg from "./assets/investment-calculator-logo.png";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

import * as util from "./util/investment.js";
import { useState } from "react";

function App() {
  let [intel, setIntel] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
  });

  let userInvestment = util.calculateInvestmentResults({
    initialInvestment: intel.initialInvestment,
    annualInvestment: intel.annualInvestment,
    expectedReturn: intel.expectedReturn,
    duration: intel.duration,
  });

  function handleUserInput(symbol, value) {
    setIntel((prev) => {
      return { ...prev, [symbol]: value };
    });

    console.log("adbasdbasd");
    console.log(symbol);
    console.log(value);
  }

  console.log(intel);

  return (
    <>
      <Header imgLink={headImg} title="Investment Calculator" />
      <section id="user-input" className="input-group">
        <UserInput
          title="Initial Investment"
          intelSymbol="initialInvestment"
          handleUserInput={handleUserInput}
        />
        <UserInput
          title="Annual Investment"
          intelSymbol="annualInvestment"
          handleUserInput={handleUserInput}
        />
        <UserInput
          title="Expected Return"
          intelSymbol="expectedReturn"
          handleUserInput={handleUserInput}
        />
        <UserInput
          title="Duration"
          intelSymbol="duration"
          handleUserInput={handleUserInput}
        />
      </section>
      <section>
        {userInvestment !== null && <Result daResult={userInvestment} />}
      </section>
    </>
  );
}

export default App;
