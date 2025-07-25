import { createContext, useState } from "react";

export const DialogContext = createContext({
  activeDialog: "",
  showCartDialog: () => {},
  hideCartDialog: () => {},
  showCheckoutDialog: () => {},
  hideCheckoutDialog: () => {},
});

export default function DialogContextProvider({ children }) {
  const [activeDialog, setActiveDialog] = useState("");

  function showCartDialog() {
    setActiveDialog("cart");
  }

  function hideCartDialog() {
    setActiveDialog("");
  }

  function showCheckoutDialog() {
    setActiveDialog("checkout");
  }

  function hideCheckoutDialog() {
    setActiveDialog("");
  }

  const ctxValues = {
    activeDialog,
    showCartDialog,
    hideCartDialog,
    showCheckoutDialog,
    hideCheckoutDialog,
  };

  console.log("activeDialog");
  console.log(activeDialog);

  return <DialogContext.Provider value={ctxValues}>{children}</DialogContext.Provider>;
}
