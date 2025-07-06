import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";
import FoodCard from "./FoodCard";

export default function FoodList() {
  const { foods } = useContext(FoodContext);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[90%] m-auto gap-4">
      {foods.map((food) => {
        return <FoodCard key={food.id} food={food} />;
      })}
    </section>
  );
}
