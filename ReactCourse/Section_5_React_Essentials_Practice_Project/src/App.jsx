import daImg from "./assets/investment-calculator-logo.png";

import { useState } from "react";
import UserInput from "./components/UserInput";
import Table from "./components/Table.jsx";

import { calculateInvestmentResults } from "./util/investment.js";

export default function App() {
  const [userIntel, setUserIntel] = useState({});

  function getUserIntel(key, val) {
    setUserIntel((prev) => {
      return { ...prev, [key]: val };
    });
  }

  const result = calculateInvestmentResults(userIntel);

  return (
    <>
      <section id="header">
        <img src={daImg} alt="" />
        <h1>Exercise</h1>
      </section>
      <section id="user-input">
        <UserInput
          title="Initial Investment"
          getUserIntel={getUserIntel}
          symbol="initialInvestment"
        />
        <UserInput
          title="Annual Investment"
          getUserIntel={getUserIntel}
          symbol="annualInvestment"
        />
        <UserInput
          title="Expected Return"
          getUserIntel={getUserIntel}
          symbol="expectedReturn"
        />
        <UserInput
          title="Duration"
          getUserIntel={getUserIntel}
          symbol="duration"
        />
      </section>
      <section>
        <Table data={result} initialInvestment={userIntel.initialInvestment} />
      </section>
    </>
  );
}
