import { useContext, useRef } from "react";
import { FoodContext } from "../context/FoodContext";
import Dialog from "./UI/Dialog";
import Cart from "./Cart";

export default function Header() {
  const { cartLength } = useContext(FoodContext);

  const refCart = useRef(null);

  function handleClickCart() {
    refCart.current.showDialog();
  }

  return (
    <section id="main-header">
      <div id="title">
        <img src="/logo.jpg" />
      </div>
      <button onClick={handleClickCart}>Cart ({cartLength})</button>
      <Dialog ref={refCart}>
        <Cart />
      </Dialog>
    </section>
  );
}
