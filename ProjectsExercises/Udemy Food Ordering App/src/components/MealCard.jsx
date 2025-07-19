import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

export default function MealCard({ meal }) {
  const { id, name, price, description, image } = meal;

  const { addFood } = useContext(FoodContext);

  return (
    <div className="meal-item">
      <article>
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <p className="meal-item-description">{description}</p>
        <p className="meal-item-price">{price}</p>
        <div className="meal-item-actions">
          <button type="button" className="text-button" onClick={() => addFood(id)}>
            Add to cart
          </button>
        </div>
      </article>
    </div>
  );
}
