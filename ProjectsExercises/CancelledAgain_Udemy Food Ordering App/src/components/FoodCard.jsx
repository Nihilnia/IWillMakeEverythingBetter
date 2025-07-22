import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

export default function FoodCard({ food }) {
  const { id, name, price, description, image } = food;

  const { addToCart, removeFromCart, checkFoodInCart } = useContext(FoodContext);

  function handleAddToCart() {
    addToCart(id);
  }

  function handleRemoveFromCart() {
    removeFromCart(id);
  }

  return (
    <div className="meal-item">
      <article>
        <div>
          <h3>{name}</h3>
          <p className="meal-item-description">{description}</p>
        </div>
        <div>
          <img src={image} alt={name} />
        </div>
        <div className="meal-item-actions">
          {checkFoodInCart(id) && (
            <button type="button" onClick={handleRemoveFromCart}>
              Remove from cart ({checkFoodInCart(id).piece})
            </button>
          )}
          <button type="button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </article>
    </div>
  );
}
