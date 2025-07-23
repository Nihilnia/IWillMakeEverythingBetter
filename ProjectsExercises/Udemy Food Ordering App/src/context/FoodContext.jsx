import { createContext, useEffect, useReducer } from "react";
import useFetch from "../hooks/useFetch";

export const FoodContext = createContext({
  availableFoods: [],
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  cartLength: 0,
  cartTotalPrice: 0,
  howMuchInCart: () => {},
});

function FoodCRUDReducer(state, action) {
  const { type, payload } = action;
  const { selectedFood } = payload;

  const foodInCart = state.find((food) => {
    return food.id === selectedFood.id;
  });

  switch (type) {
    case "ADD_FOOD": {
      //Check if its already in cart

      //If it is then +1 to piece
      if (foodInCart) {
        return state.map((food) => {
          return food.id === selectedFood.id
            ? { ...selectedFood, piece: foodInCart.piece + 1 }
            : food;
        });
      }

      //if not add +1
      return [...state, { ...selectedFood, piece: 1 }];
    }

    case "REMOVE_FOOD": {
      //Check if food' s piece more than 1

      //If it is remove -1 piece
      if (foodInCart.piece > 1) {
        return state.map((food) => {
          return food.id === selectedFood.id
            ? { ...selectedFood, piece: foodInCart.piece - 1 }
            : food;
        });
      }

      //if not -1 piece
      return state.filter((food) => {
        return food.id !== foodInCart.id;
      });
    }
  }
}

export default function FoodContextProvider({ children }) {
  const { fetchData, fetchedData, fetchError, loading } = useFetch();
  const [cart, dispatch] = useReducer(FoodCRUDReducer, []);

  useEffect(() => {
    fetchData("get", "http://localhost:3000/meals");
  }, []);

  function addToCart(id) {
    const selectedFood = fetchedData.find((food) => {
      return food.id === id;
    });

    dispatch({
      type: "ADD_FOOD",
      payload: {
        selectedFood,
      },
    });
  }
  function removeFromCart(id) {
    const selectedFood = fetchedData.find((food) => {
      return food.id === id;
    });

    dispatch({
      type: "REMOVE_FOOD",
      payload: {
        selectedFood,
      },
    });
  }

  function howMuchInCart(id) {
    const theFood = cart.find((food) => {
      return food.id === id;
    });

    return theFood?.piece;
  }

  const ctxValues = {
    availableFoods: fetchedData || [],
    cart,
    addToCart,
    removeFromCart,
    cartLength: cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.piece;
    }, 0),
    cartTotalPrice: cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.piece * currentValue.price;
    }, 0),
    howMuchInCart,
  };

  return <FoodContext.Provider value={ctxValues}>{children}</FoodContext.Provider>;
}
