import { useContext } from "react";
import appLogo from "/logo.jpg";
import { FoodContext } from "../store/FoodContext";

import Button from "./UI/Button";

import { DialogContext } from "../store/DialogContext";

export default function Header() {
  const { cart } = useContext(FoodContext);
  const { showCartDialog } = useContext(DialogContext);

  const foodLength = cart.reduce((count, order) => {
    return count + order.quantity;
  }, 0);

  function handleOpenCart() {
    showCartDialog();
  }

  return (
    <div id="main-header">
      <div id="title">
        <img src={appLogo} alt="My app" />
        <h1>My Food App</h1>
      </div>
      <Button textOnly onClick={handleOpenCart}>
        Cart ({foodLength})
      </Button>
    </div>
  );
}
