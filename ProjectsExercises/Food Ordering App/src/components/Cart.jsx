import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

export default function Cart({ onSetIsCartOpen }) {
  const { cart } = useContext(FoodContext);

  return <section onClick={onSetIsCartOpen}>Cart: {cart.length}</section>;
}
