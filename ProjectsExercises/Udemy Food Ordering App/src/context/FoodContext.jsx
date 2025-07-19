import { createContext, useEffect, useState } from "react";

export const FoodContext = createContext({
  availableFoods: [],
  addFood: () => {},
  removeFood: () => {},
  cart: [],
  cartLength: 0,
  totalPrice: 0,
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
    const foundMeal = availableFoods.filter((meal) => {
      return meal.id === id;
    });

    setCart((prev) => {
      return [...prev, foundMeal];
    });
  }

  function removeFood() {}

  const ctxValues = {
    availableFoods,
    addFood,
    removeFood,
    cart,
    cartLength: cart.length,
    totalPrice: cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0),
  };

  return <FoodContext.Provider value={ctxValues}>{children}</FoodContext.Provider>;
}
