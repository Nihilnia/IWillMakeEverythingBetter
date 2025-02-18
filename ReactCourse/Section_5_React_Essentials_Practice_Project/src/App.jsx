import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prev) => {
      return { ...prev, [inputIdentifier]: +newValue };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {inputIsValid && <Results res={userInput} inputIsValid={inputIsValid} />}
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
