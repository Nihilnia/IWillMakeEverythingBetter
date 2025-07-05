import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

export default function FoodCard({ food }) {
  const { id, name, description, image } = food;
  const { addFoodToCart, removeFoodFromCart } = useContext(FoodContext);

  function handleFoodOp(e) {
    const choice = e.target.name;

    if (choice === "add") {
      addFoodToCart(id);
    } else {
      removeFoodFromCart(id);
    }
  }

  return (
    <div>
      <img src={image} alt={name} className="rounded" />
      <div>
        <h2>{name}</h2>
        <h4>{description}</h4>
      </div>
      <div>
        <button type="button" name="add" onClick={handleFoodOp}>
          Add
        </button>
        <button type="button" name="remove" onClick={handleFoodOp}>
          Remove
        </button>
      </div>
    </div>
  );
}
