import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

export default function Header() {
  const { cartLength } = useContext(FoodContext);

  return (
    <section id="main-header">
      <div id="title">
        <img src="/logo.jpg" alt="asdasd" />
        <h3>Food Order App</h3>
      </div>
      <div>
        <button type="button">Cart ({cartLength})</button>
      </div>
    </section>
  );
}
