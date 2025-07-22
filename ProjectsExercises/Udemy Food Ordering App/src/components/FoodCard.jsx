import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

export default function FoodCard({ food }) {
  const { id, name, description, image, price, piece } = food;

  const { addToCart, removeFromCart, howMuchInCart } = useContext(FoodContext);

  function handleAddToCart() {
    addToCart(id);
  }

  function handleRemoveFromCart() {
    removeFromCart(id);
  }

  return (
    <div className="meal-item">
      <article>
        <h3>{name}</h3>

        <img src={image} alt={name} />

        <p className="meal-item-description">{description}</p>
        <div className="meal-item-actions">
          {howMuchInCart(id) && (
            <button type="button" className="text-button" onClick={handleRemoveFromCart}>
              Remove from cart
            </button>
          )}
          <button type="button" className="button" onClick={handleAddToCart}>
            Add to cart
          </button>
          {howMuchInCart(id) && <div>{howMuchInCart(id)} in cart.</div>}
        </div>
        <p className="meal-item-price">${price}</p>
      </article>
    </div>
  );
}
