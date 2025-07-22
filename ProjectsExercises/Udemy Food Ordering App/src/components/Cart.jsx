import { useContext, useRef } from "react";
import { FoodContext } from "../context/FoodContext";
import { DialogContext } from "../context/DialogContext";
import Dialog from "./UI/Dialog";

export default function Cart() {
  const { cart } = useContext(FoodContext);
  const { handleShowDialog } = useContext(DialogContext);

  const reff = useRef(null);

  function handleOpenCheckout() {
    handleShowDialog(reff);
  }

  return (
    <section className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((order) => {
          return <li key={order.id}>{order.name}</li>;
        })}
      </ul>
      <div>
        <button type="button" onClick={handleOpenCheckout}>
          Checkout
        </button>
      </div>
      <Dialog ref={reff}>
        <h2>Checkout</h2>
      </Dialog>
    </section>
  );
}
