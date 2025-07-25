import { useContext } from "react";
import { FoodContext } from "../store/FoodContext";

export default function CartItem({ order }) {
  const { id, name, quantity, price } = order;

  const { addToCart, removeFromCart } = useContext(FoodContext);

  function handleAddFood() {
    addToCart(order);
  }

  function handleRemoveFood() {
    removeFromCart(id);
  }

  return (
    <li key={id} className="cart-item">
      <p>
        {name} - {quantity} x {price}
      </p>
      <div className="cart-item-actions">
        <button type="button" onClick={() => handleRemoveFood(id)}>
          -
        </button>
        {quantity}
        <button type="button" onClick={() => handleAddFood(order)}>
          +
        </button>
      </div>
    </li>
  );
}
