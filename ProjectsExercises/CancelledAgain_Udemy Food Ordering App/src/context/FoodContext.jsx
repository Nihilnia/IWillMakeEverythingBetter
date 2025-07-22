import { createContext, useEffect, useReducer, useState } from "react";

export const FoodContext = createContext({
  availableFoods: [],
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  cartLength: 0,
  totalPrice: 0,
  checkFoodInCart: () => {},
});

function FoodCRUDReducer(state, action) {
  const { type, payload } = action;
  const { selectedFood } = payload;

  switch (type) {
    case "ADD_FOOD": {
      const isInCart = state.find((food) => {
        return food.id === selectedFood.id;
      });

      //Checking if its already in cart
      if (isInCart) {
        return state.map((food) => {
          return food.id === selectedFood.id
            ? { ...selectedFood, piece: isInCart.piece + 1 }
            : food;
        });
      }

      //First time adding to cart
      return [...state, { ...selectedFood, piece: 1 }];
    }

    case "REMOVE_FOOD": {
      //If its more than one remove only one piece
      if (selectedFood.piece > 1) {
        return state.map((food) => {
          return food.id === selectedFood.id
            ? { ...selectedFood, piece: selectedFood.piece - 1 }
            : food;
        });
      }

      //If not, remove completely
      return state.filter((food) => {
        return food.id !== selectedFood.id;
      });
    }
  }
}

export default function FoodContextProvider({ children }) {
  const [availableFoods, setAvailableFoods] = useState([]);
  const [cart, dispatch] = useReducer(FoodCRUDReducer, []);

  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/meals");
        if (!response.ok) {
          throw new Error(`Something went wrong ${response.status}`);
        }

        const result = await response.json();
        setAvailableFoods(result);
      } catch (err) {
        setFetchError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  function addToCart(id) {
    const selectedFood = availableFoods.find((food) => {
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
    const selectedFood = cart.find((food) => {
      return food.id === id;
    });

    dispatch({
      type: "REMOVE_FOOD",
      payload: {
        selectedFood,
      },
    });
  }

  function checkFoodInCart(id) {
    return cart.find((food) => {
      return food.id === id;
    });
  }

  const ctxValues = {
    availableFoods,
    cart,
    addToCart,
    removeFromCart,
    cartLength: cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.piece;
    }, 0),
    totalPrice: cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.piece * currentValue.price;
    }, 0),
    checkFoodInCart,
  };

  return <FoodContext.Provider value={ctxValues}>{children}</FoodContext.Provider>;
}
