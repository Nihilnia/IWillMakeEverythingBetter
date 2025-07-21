import { createContext, useEffect, useState } from "react";

export const FoodContext = createContext({
  availableFoods: [],
  addFood: () => {},
  removeFood: () => {},
  cart: [],
  cartLength: 0,
  totalPrice: 0,
  foodInfoFromCart: () => {},
});

export default function FoodContextProvider({ children }) {
  const [availableFoods, setAvailableFoods] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/meals");
        if (!response.ok) {
          throw new Error(`Something went wrong: ${response.status}`);
        }
        const result = await response.json();
        setAvailableFoods(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  function addFood(id) {
    const selectedFood = availableFoods.find((meal) => {
      return meal.id === id;
    });

    setCart((prev) => {
      const isInCart = prev.find((meal) => {
        return meal.id === id;
      });

      if (isInCart) {
        return prev.map((meal) => {
          return meal.id === id ? { ...meal, piece: meal.piece + 1 } : meal;
        });
      }

      return [...prev, { ...selectedFood, piece: 1 }];
    });
  }

  function removeFood(id) {
    setCart((prev) => {
      const foundFood = prev.find((food) => {
        return food.id === id;
      });

      if (foundFood.piece > 1) {
        return prev.map((food) => {
          return food.id === id ? { ...foundFood, piece: foundFood.piece - 1 } : food;
        });
      }

      return prev.filter((food) => {
        return food.id !== id;
      });
    });
  }

  function foodInfoFromCart(id) {
    return cart.find((food) => {
      return id === food.id;
    });
  }

  const ctxValues = {
    availableFoods,
    addFood,
    removeFood,
    cart,
    cartLength: cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.piece;
    }, 0),
    totalPrice: cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.piece;
    }, 0),
    foodInfoFromCart,
  };

  return <FoodContext.Provider value={ctxValues}>{children}</FoodContext.Provider>;
}
