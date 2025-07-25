import { useContext, useRef } from "react";
import { FoodContext } from "../context/FoodContext";
import { DialogContext } from "../context/DialogContext";
import Dialog from "./UI/Dialog";
import CheckoutForm from "./CheckoutForm";

export default function Cart() {
  const { cart, addToCart, removeFromCart, cartTotalPrice, cartLength } = useContext(FoodContext);
  const { handleShowDialog, clearActiveDialog } = useContext(DialogContext);

  const reff = useRef(null);

  function handleOpenCheckout() {
    handleShowDialog(reff);
  }

  function handleCloseCart() {
    clearActiveDialog();
  }

  function handleAddToCart(id) {
    addToCart(id);
  }
  function handleRemoveFromCart(id) {
    removeFromCart(id);
  }

  return (
    <section className="cart">
      {cartLength > 0 ? (
        <>
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
                    <button
                      type="button"
                      onClick={() => {
                        handleRemoveFromCart(id);
                      }}
                    >
                      -
                    </button>
                    <p>{piece}</p>
                    <button
                      type="button"
                      onClick={() => {
                        handleAddToCart(id);
                      }}
                    >
                      +
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="cart-total">
            <p>Total: ${cartTotalPrice}</p>
          </div>
          <div className="modal-actions">
            <button type="button" className="text-button" onClick={handleCloseCart}>
              Close
            </button>
            <button type="button" className="button" onClick={handleOpenCheckout}>
              Checkout
            </button>
          </div>
          <Dialog ref={reff}>
            <CheckoutForm />
          </Dialog>
        </>
      ) : (
        <div className="center">
          <h2>You did not add anything yet.</h2>
          <button type="button" className="button" onClick={handleCloseCart}>
            Close
          </button>
        </div>
      )}
    </section>
  );
}
