import { useContext } from "react";
import { FoodContext } from "../store/FoodContext";
import Dialog from "./UI/Dialog";
import { DialogContext } from "../store/DialogContext";
import Button from "./UI/Button";

export default function Cart() {
  const { cart, addToCart, removeFromCart } = useContext(FoodContext);
  const { activeDialog, hideCartDialog, showCheckoutDialog } = useContext(DialogContext);

  function handleAddFood(food) {
    addToCart(food);
  }
  function handleRemoveFood(id) {
    removeFromCart(id);
  }

  function handleCheckout() {
    showCheckoutDialog();
  }

  return (
    <Dialog className="cart" open={activeDialog === "cart"} handleClose={hideCartDialog}>
      <div className="cart">
        <h2>Orders</h2>
        <ul>
          {cart.map((order) => {
            return (
              <li key={order.id}>
                {order.name} - {order.quantity} x {order.price}
                <button onClick={() => handleRemoveFood(order.id)}>-</button>
                {order.quantity}
                <button onClick={() => handleAddFood(order)}>+</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="modal-actions">
        <Button textOnly>Close</Button>
        <Button onClick={handleCheckout}>Checkout</Button>
      </div>
    </Dialog>
  );
}
