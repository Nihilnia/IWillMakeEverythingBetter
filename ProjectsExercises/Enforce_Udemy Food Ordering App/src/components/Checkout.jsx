import { useContext } from "react";
import Dialog from "./UI/Dialog";
import InputGroup from "./UI/InputGroup";
import { DialogContext } from "../store/DialogContext";

export default function Checkout() {
  const { activeDialog, hideCheckoutDialog } = useContext(DialogContext);

  return (
    <Dialog handleClose={hideCheckoutDialog} open={activeDialog === "checkout"}>
      <form onSubmit={handleSubmit}>
        <InputGroup labelFor={"name"} labelTitle={"Full name"} />
        <InputGroup labelFor={"email"} labelTitle={"Email"} type={"email"} />
        <InputGroup labelFor={"street"} labelTitle={"Street"} />
        <div className="control-row">
          <InputGroup labelFor={"postal-code"} labelTitle={"Postal code"} />
          <InputGroup labelFor={"city"} labelTitle={"City"} />
        </div>
      </form>
    </Dialog>
  );
}
