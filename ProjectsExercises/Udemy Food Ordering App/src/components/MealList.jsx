import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";
import MealCard from "./MealCard";

export default function MealList() {
  const { availableFoods } = useContext(FoodContext);

  return (
    <div>
      {availableFoods.map((meal) => {
        return <MealCard key={meal.id} meal={meal} />;
      })}
    </div>
  );
}
