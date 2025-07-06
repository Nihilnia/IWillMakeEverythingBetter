import { createContext, useReducer, useState } from "react";
import foodList from "../db/foodList";

export const FoodContext = createContext({
  foods: [],
  cart: [],
  addFoodToCart: () => {},
  removeFoodFromCart: () => {},
});

function FoodContextReducer(state, action) {
  const { type, payload } = action;
  const { id } = payload;

  const alreadyInCart = state.find((f) => {
    return f.id === id;
  });

  switch (type) {
    case "ADD_FOOD": {
      if (alreadyInCart) {
        const newCart = state.map((f) => {
          return f.id === id ? { ...f, piece: f.piece + 1, price: f.price * (f.piece + 1) } : f;
        });

        return newCart;
      }

      const foundFood = foodList.find((f) => {
        return f.id === id;
      });

      return [...state, { ...foundFood, piece: 1 }];
    }

    case "REMOVE_FOOD": {
      let copyCart = [...state];

      const foundFood = copyCart.find((f) => {
        return f.id === id;
      });

      if (foundFood.piece === 1) {
        copyCart = copyCart.filter((f) => {
          return f.id !== foundFood.id;
        });
      } else {
        copyCart = copyCart.map((f) => {
          return f.id === foundFood.id ? { ...f, piece: foundFood.piece - 1 } : f;
        });
      }

      return copyCart;
    }

    default: {
      return state;
    }
  }
}

export default function FoodContextProvider({ children }) {
  const [cart, dispatch] = useReducer(FoodContextReducer, []);

  console.log(cart);

  function addFoodToCart(id) {
    dispatch({
      type: "ADD_FOOD",
      payload: {
        id: id,
      },
    });
  }

  function removeFoodFromCart(id) {
    dispatch({
      type: "REMOVE_FOOD",
      payload: {
        id: id,
      },
    });
  }

  const ctxValues = {
    foods: foodList,
    cart: cart,
    addFoodToCart: addFoodToCart,
    removeFoodFromCart: removeFoodFromCart,
  };

  return <FoodContext.Provider value={ctxValues}>{children}</FoodContext.Provider>;
}
