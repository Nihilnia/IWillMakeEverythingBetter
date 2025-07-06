import { useContext, useEffect, useState } from "react";
import { FoodContext } from "../context/FoodContext";
import FoodDetails from "./FoodDetails";

import { ShoppingCart, Plus } from "lucide-react";
import Notification from "./Notification";

export default function FoodCard({ food }) {
  const { id, name, description, image } = food;
  const { addFoodToCart, removeFoodFromCart } = useContext(FoodContext);
  const [isDetails, setIsDetails] = useState(false);
  const [isButtons, setIsButtons] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  function handleFoodOp(e) {
    const choice = e.target.name;

    if (choice === "add") {
      addFoodToCart(id);
    } else {
      removeFoodFromCart(id);
    }

    setIsNotification(true);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNotification(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [isNotification]);

  return (
    <div
      onMouseEnter={(e) => {
        handleToggleButtons(e, "show");
      }}
      onMouseLeave={(e) => {
        handleToggleButtons(e, "hide");
      }}
      className="pb-12"
    >
      <div className="relative rounded overflow-hidden group cursor-pointer">
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
      <div className="flex flex-col h-24 gap-2">
        <h2 className="food-title text-white">{name}</h2>
        <h4 className="food-text">{description}</h4>
        {isButtons && (
          <div>
            <button
              type="button"
              name="add"
              onClick={handleFoodOp}
              className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg 
            text-white font-medium transition-all duration-200 hover:shadow-lg flex items-center gap-2 group"
            >
              <ShoppingCart className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Add to cart
            </button>
          </div>
        )}
      </div>

      {isDetails && <FoodDetails onHandleToggle={handleToggleDetails} food={food} />}
      {isNotification && (
        <Notification>
          <h2>asd</h2>
        </Notification>
      )}
    </div>
  );
}
