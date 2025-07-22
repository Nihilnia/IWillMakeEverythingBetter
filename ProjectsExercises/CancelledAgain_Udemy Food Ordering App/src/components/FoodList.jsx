import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";
import FoodCard from "./FoodCard";

export default function FoodList() {
  const { availableFoods } = useContext(FoodContext);

  return (
    <section id="meals">
      {availableFoods.map((food) => {
        return <FoodCard key={food.id} food={food} />;
      })}
    </section>
  );
}
