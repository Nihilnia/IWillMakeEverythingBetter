import { createContext, useRef } from "react";

export const DialogContext = createContext({
  handleShowDialog: () => {},
  clearActiveDialog: () => {},
});

export default function DialogContextProvider({ children }) {
  const refCurrentDialog = useRef(null);

  function handleShowDialog(incomingRef) {
    console.log("handleShowDialog");

    //First lets close old one
    refCurrentDialog.current?.hideDialog();

    //Then change the current one and open it
    refCurrentDialog.current = incomingRef.current;
    refCurrentDialog.current.showDialog();
  }

  function clearActiveDialog() {
    console.log("clearActiveDialog");
    refCurrentDialog.current = null;
  }

  const ctxValues = {
    handleShowDialog,
    clearActiveDialog,
  };

  return <DialogContext.Provider value={ctxValues}>{children}</DialogContext.Provider>;
}
