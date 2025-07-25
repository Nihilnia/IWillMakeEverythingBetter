import { useContext } from "react";
import Dialog from "./UI/Dialog";
import InputGroup from "./UI/InputGroup";
import { DialogContext } from "../store/DialogContext";
import Button from "./UI/Button";
import { FoodContext } from "../store/FoodContext";

export default function Checkout() {
  const { cart } = useContext(FoodContext);
  const { activeDialog, hideDialog } = useContext(DialogContext);

  function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const customerData = Object.fromEntries(formData.entries());

    console.log(customerData);

    const sendData = async function sendData() {
      await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order: {
            items: cart,
            customer: customerData,
          },
        }),
      });
    };

    sendData();
  }

  return (
    <Dialog
      handleClose={hideDialog}
      open={activeDialog === "checkout"}
      onClose={activeDialog === "checkout" ? hideDialog : null}
    >
      <form onSubmit={handleFormSubmit}>
        <InputGroup labelFor={"name"} labelTitle={"Full name"} />
        <InputGroup labelFor={"email"} labelTitle={"Email"} type={"email"} />
        <InputGroup labelFor={"street"} labelTitle={"Street"} />
        <div className="control-row">
          <InputGroup labelFor={"postal-code"} labelTitle={"Postal code"} />
          <InputGroup labelFor={"city"} labelTitle={"City"} />
        </div>
        <div>
          <Button textOnly>Cancel</Button>
          <Button className={"button"} type="submit">
            Send
          </Button>
        </div>
      </form>
    </Dialog>
  );
}
