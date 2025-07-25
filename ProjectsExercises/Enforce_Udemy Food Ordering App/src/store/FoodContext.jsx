import { createContext, useReducer } from "react";

export const FoodContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

function foodContextReducer(state, action) {
  const { type, payload } = action;
  const { incFood, id } = payload;

  let updatedCart = [...state.items];

  if (type === "ADD_FOOD") {
    const foodIndex = updatedCart.findIndex((food) => {
      return food.id === incFood.id;
    });

    if (foodIndex !== -1) {
      updatedCart[foodIndex] = { ...incFood, quantity: updatedCart[foodIndex].quantity + 1 };
    } else {
      updatedCart.push({ ...incFood, quantity: 1 });
    }
  } else if (type === "REMOVE_FOOD") {
    let selectedFood = updatedCart.find((food) => {
      return food.id === id;
    });

    if (selectedFood.quantity > 1) {
      selectedFood = { ...selectedFood, quantity: selectedFood.quantity - 1 };
      updatedCart = updatedCart.filter((food) => {
        return food.id !== selectedFood.id;
      });
      updatedCart.push(selectedFood);
    } else {
      updatedCart = updatedCart.filter((food) => {
        return food.id !== id;
      });
    }
  }

  return {
    items: updatedCart,
  };
}

export default function FoodContextProvider({ children }) {
  const [cart, dispatch] = useReducer(foodContextReducer, { items: [] });

  function addToCart(incFood) {
    dispatch({
      type: "ADD_FOOD",
      payload: {
        incFood,
      },
    });
  }

  function removeFromCart(id) {
    dispatch({
      type: "REMOVE_FOOD",
      payload: {
        id,
      },
    });
  }

  const ctxValues = {
    cart: cart.items,
    addToCart,
    removeFromCart,
  };

  console.log(cart);

  return <FoodContext.Provider value={ctxValues}>{children}</FoodContext.Provider>;
}
