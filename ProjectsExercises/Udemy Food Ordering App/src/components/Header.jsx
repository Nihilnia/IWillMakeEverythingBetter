import { useContext, useRef } from "react";
import { FoodContext } from "../context/FoodContext";
import Dialog from "./UI/Dialog";
import { DialogContext } from "../context/DialogContext";
import Cart from "./Cart";

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
        <img src="/logo.jpg" alt="asdasd" />
        <h1>Food Order App</h1>
      </div>
      <div>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <h3 className="button-text" onClick={handleOpenCart}>
          Cart ({cartLength})
        </h3>
      </div>
      <Dialog ref={reff}>
        <Cart />
      </Dialog>
    </section>
  );
}
