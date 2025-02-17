import { useState } from "react";
import headerImg from "./assets/a.png";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Table from "./components/Table.jsx";

import { calculateInvestmentResults } from "./util/investment.js";

export default function App() {
  const [userIntel, setUserIntel] = useState({});

  function getUserInput(key, val) {
    setUserIntel((prev) => {
      return { ...prev, [key]: val };
    });
  }

  const result = calculateInvestmentResults(userIntel);

  console.log("result");
  console.log(result);

  return (
    <>
      <Header theImg={headerImg}>Example Title</Header>
      <section id="user-input">
        <UserInput
          title="Initial Investment"
          symbol="initialInvestment"
          getUserInput={getUserInput}
        />
        <UserInput
          title="Annual Investment"
          getUserInput={getUserInput}
          symbol="annualInvestment"
        />
        <UserInput
          title="Expected Return"
          getUserInput={getUserInput}
          symbol="expectedReturn"
        />
        <UserInput
          title="Duration"
          getUserInput={getUserInput}
          symbol="duration"
        />
      </section>
      <Table result={result} />
    </>
  );
}
