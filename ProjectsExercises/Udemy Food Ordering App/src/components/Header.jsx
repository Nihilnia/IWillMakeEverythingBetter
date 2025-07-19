import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

export default function Header() {
  const { cartLength } = useContext(FoodContext);

  return (
    <section id="main-header">
      <div id="title">
        <img src="/logo.jpg" />
      </div>
      <button>Cart ({cartLength})</button>
    </section>
  );
}
