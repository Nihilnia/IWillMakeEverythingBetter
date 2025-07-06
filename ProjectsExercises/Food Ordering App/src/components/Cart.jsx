import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

import { ShoppingBasket } from "lucide-react";

export default function Cart({ onSetIsCartOpen }) {
  const { cart } = useContext(FoodContext);

  return (
    <div>
      <button
        onClick={onSetIsCartOpen}
        type="button"
        name="add"
        className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg 
            text-white font-medium transition-all duration-200 hover:shadow-lg flex items-center gap-2 group"
      >
        <ShoppingBasket className="w-4 h-4 group-hover:scale-110 transition-transform" />
        Cart ({cart.length})
      </button>
    </div>
  );
}
