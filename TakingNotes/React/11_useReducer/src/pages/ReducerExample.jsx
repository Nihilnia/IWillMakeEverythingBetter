import { useReducer } from "react";

function reducerExampleReducer(state, action) {
  const { type } = action;

  switch (type) {
    case "PLUS":
      return state + 1;
    case "MINUS":
      return state + -1;
    case "RESET":
      return 0;
    default:
      return 0;
  }
}

export default function ReducerExample() {
  const [state, dispatch] = useReducer(reducerExampleReducer, 0);

  function handlePlus() {
    dispatch({ type: "PLUS" });
  }
  function handleMinus() {
    dispatch({ type: "MINUS" });
  }
  function handleReset() {
    dispatch({ type: "RESET" });
  }

  return (
    <section>
      <h2>Count: {state}</h2>
      <button onClick={handlePlus}>Plus 1</button>
      <button onClick={handleMinus}>Minus 1</button>
      <button onClick={handleReset}>Reset</button>
    </section>
  );
}
