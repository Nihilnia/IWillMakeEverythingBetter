import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

export default function FoodList() {
  const [availableFoods, setAvailableFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async function fetchFoods() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        throw new Error(`Something went wrong ${response.message}`);
      }

      const data = await response.json();
      setAvailableFoods(data);
    };

    fetchFoods();
  }, []);

  return (
    <div id="meals">
      {availableFoods.map((food) => {
        return <FoodCard key={food.id} food={food} />;
      })}
    </div>
  );
}
