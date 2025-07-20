import { useContext, useRef } from "react";
import { FoodContext } from "../context/FoodContext";
import Dialog from "./UI/Dialog";
import Cart from "./Cart";
import { DialogContext } from "../context/DialogContext";

export default function Header() {
  const { cartLength } = useContext(FoodContext);

  const { dialogOptions, handleDialog } = useContext(DialogContext);

  const refDialog = useRef(null);

  function onHandleDialog() {
    handleDialog("cart", refDialog);
  }

  return (
    <section id="main-header">
      <div id="title">
        <img src="/logo.jpg" alt="logo" />
      </div>
      <button type="button" onClick={onHandleDialog}>
        Cart ({cartLength})
      </button>
      {dialogOptions.whichDialog === "cart" && (
        <Dialog ref={refDialog}>
          <Cart />
        </Dialog>
      )}
    </section>
  );
}
