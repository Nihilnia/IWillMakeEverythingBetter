import { useContext, useRef } from "react";
import { FoodContext } from "../context/FoodContext";
import { DialogContext } from "../context/DialogContext";
import Dialog from "./UI/Dialog";

export default function Cart() {
  const { cart } = useContext(FoodContext);
  const { handleShowDialog, clearActiveDialog } = useContext(DialogContext);

  const reff = useRef(null);

  function handleOpenCheckout() {
    handleShowDialog(reff);
  }

  function handleCloseCart() {
    clearActiveDialog();
  }

  return (
    <section className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cart.map((order) => {
          const { id, name, price, piece } = order;
          return (
            <li key={id} className="cart-item">
              <p>
                {name} - {piece} x ${price}
              </p>
              <div className="cart-item-actions">
                <button type="button">-</button>
                <p>{piece}</p>
                <button type="button">+</button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="modal-actions">
        <button type="button" className="text-button" onClick={handleCloseCart}>
          Close
        </button>
        <button type="button" className="button" onClick={handleOpenCheckout}>
          Checkout
        </button>
      </div>
      <Dialog ref={reff}>
        <h2>Checkout</h2>
      </Dialog>
    </section>
  );
}
