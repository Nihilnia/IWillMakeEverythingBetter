import { useContext } from "react";
import { FoodContext } from "../store/FoodContext";
import Dialog from "./UI/Dialog";
import { DialogContext } from "../store/DialogContext";
import Button from "./UI/Button";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart } = useContext(FoodContext);
  const { activeDialog, hideDialog, showCheckoutDialog } = useContext(DialogContext);

  function handleCheckout() {
    showCheckoutDialog();
  }

  function handleCloseDialog() {
    hideDialog();
  }

  return (
    <Dialog
      className="cart"
      open={activeDialog === "cart"}
      onClose={activeDialog === "cart" ? handleCloseDialog : null}
    >
      <div className="cart">
        <h2>{cart.length > 0 ? "Your" : "You dont have any"} orders</h2>
        <ul>
          {cart.map((order) => {
            return <CartItem key={order.id} order={order} />;
          })}
        </ul>
      </div>
      <div className="modal-actions">
        <Button textOnly onClick={handleCloseDialog}>
          Close
        </Button>
        {cart.length > 0 && <Button onClick={handleCheckout}>Checkout</Button>}
      </div>
    </Dialog>
  );
}
