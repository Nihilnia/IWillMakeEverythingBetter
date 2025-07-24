import { useContext, useRef } from "react";
import { FoodContext } from "../context/FoodContext";
import Dialog from "./UI/Dialog";
import { DialogContext } from "../context/DialogContext";
import Cart from "./Cart";

import logo from "/logo.jpg";

export default function Header() {
  const { cartLength } = useContext(FoodContext);
  const { handleShowDialog } = useContext(DialogContext);

  const reff = useRef(null);

  function handleOpenCart() {
    handleShowDialog(reff);
  }

  return (
    <section id="main-header">
      <div id="title">
        <img src={logo} alt="asdasd" />
        <h1>Food Order App</h1>
      </div>
      <div>
        <button className="text-button" onClick={handleOpenCart}>
          Cart ({cartLength})
        </button>
      </div>
      <Dialog ref={reff}>
        <Cart />
      </Dialog>
    </section>
  );
}
