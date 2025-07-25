import { useContext } from "react";
import Button from "./UI/Button";
import { FoodContext } from "../store/FoodContext";

export default function FoodCard({ food }) {
  const { name, description, image, price } = food;
  const { addToCart } = useContext(FoodContext);

  function handleAddToCart() {
    addToCart(food);
  }

  return (
    <div className="meal-item">
      <article>
        <h3>{name}</h3> <p className="meal-item-price">{price}</p>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <p className="meal-item-description">{description}</p>
        <div className="meal-item-action">
          <Button onClick={handleAddToCart}>Add to cart</Button>
        </div>
      </article>
    </div>
  );
}
