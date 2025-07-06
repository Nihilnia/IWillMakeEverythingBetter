import { useContext, useState } from "react";
import { FoodContext } from "../context/FoodContext";
import FoodDetails from "./FoodDetails";

export default function FoodCard({ food }) {
  const { id, name, description, image } = food;
  const { addFoodToCart, removeFoodFromCart } = useContext(FoodContext);
  const [isDetails, setIsDetails] = useState(false);
  const [isButtons, setIsButtons] = useState(false);

  function handleFoodOp(e) {
    const choice = e.target.name;

    if (choice === "add") {
      addFoodToCart(id);
    } else {
      removeFoodFromCart(id);
    }
  }

  function handleToggleDetails() {
    setIsDetails((prev) => {
      return !prev;
    });
  }

  function handleToggleButtons(e, op) {
    if (op === "show") {
      setIsButtons(true);
    } else {
      setIsButtons(false);
    }
  }

  return (
    <div
      onMouseEnter={(e) => {
        handleToggleButtons(e, "show");
      }}
      onMouseLeave={(e) => {
        handleToggleButtons(e, "hide");
      }}
    >
      <div className="relative rounded overflow-hidden group">
        <img
          src={image}
          alt={name}
          className="rounded w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          onClick={handleToggleDetails}
          className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="text-white text-lg font-semibold">See Details</span>
        </div>
      </div>
      <div className="flex flex-col h-24">
        <h2 className="food-title text-white">{name}</h2>
        <h4 className="food-text">{description}</h4>
      </div>
      {isButtons && (
        <div className="mt-1 flex flex-row justify-between">
          <button
            type="button"
            name="add"
            onClick={handleFoodOp}
            className="bg-orange-500 px-2 py-0.5 rounded"
          >
            Add to cart
          </button>
        </div>
      )}
      {isDetails && <FoodDetails onHandleToggle={handleToggleDetails} food={food} />}
    </div>
  );
}
