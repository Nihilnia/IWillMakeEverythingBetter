import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

export default function Cart() {
  const { cart } = useContext(FoodContext);

  return <section>Cart: {cart.length}</section>;
}
