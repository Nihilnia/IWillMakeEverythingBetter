import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

export default function Cart() {
  const { cart, cartLength, totalPrice } = useContext(FoodContext);

  return (
    <section className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((meal) => {
          const { id, name, price, image, piece } = meal;

          return (
            <li key={id}>
              <div>
                <p>
                  {name} ({price}) x [{piece}]
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <div>Total meals: {cartLength}</div>
      <div>Total price: {totalPrice}</div>
    </section>
  );
}
