import { createContext, useState } from "react";

export const DialogContext = createContext({
  activeDialog: "",
  showCartDialog: () => {},
  showCheckoutDialog: () => {},
  hideDialog: () => {},
});

export default function DialogContextProvider({ children }) {
  const [activeDialog, setActiveDialog] = useState("");

  function showCartDialog() {
    setActiveDialog("cart");
  }

  function showCheckoutDialog() {
    setActiveDialog("checkout");
  }

  function hideDialog() {
    setActiveDialog("");
  }

  const ctxValues = {
    activeDialog,
    showCartDialog,
    showCheckoutDialog,
    hideDialog,
  };

  return <DialogContext.Provider value={ctxValues}>{children}</DialogContext.Provider>;
}
