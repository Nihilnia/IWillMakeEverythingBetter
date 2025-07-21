import { useContext, useRef } from "react";
import { FoodContext } from "../context/FoodContext";
import Dialog from "./UI/Dialog";
import CheckoutForm from "./CheckoutForm";
import { DialogContext } from "../context/DialogContext";

export default function Cart() {
  const { addFood, removeFood, cart, cartLength, totalPrice } = useContext(FoodContext);

  const { handleDialog } = useContext(DialogContext);

  const refDialog = useRef(null);

  function onHandleDialog() {
    handleDialog(refDialog);
  }

  return (
    <section className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((meal) => {
          const { id, name, price, image, piece } = meal;

          return (
            <li key={id}>
              <div>
                <p>
                  {name} ({price}) x [{piece}]
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <div>Total meals: {cartLength}</div>

      <div>Total price: {totalPrice}</div>
      <div>
        <button className="button" type="button">
          Close
        </button>
        <button className="button" type="button" onClick={onHandleDialog}>
          Checkout
        </button>
      </div>

      <Dialog ref={refDialog}>
        <CheckoutForm />
      </Dialog>
    </section>
  );
}
