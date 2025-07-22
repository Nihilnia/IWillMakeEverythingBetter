import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

export default function Cart() {
  const { cart } = useContext(FoodContext);

  return (
    <section className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((order) => {
          return <li key={order.id}>{order.name}</li>;
        })}
      </ul>
    </section>
  );
}
