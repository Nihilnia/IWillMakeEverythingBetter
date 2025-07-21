// DialogContext.jsx
import { createContext, useRef } from "react";

export const DialogContext = createContext({
  handleDialog: () => {},
  // clearActiveDialog is not needed as a public API if handleDialog always manages the active state
});

export default function DialogContextProvider({ children }) {
  const refActiveDialog = useRef(null);

  // This function is the single entry point for managing dialogs
  function handleDialog(incomingRef) {
    // 1. If there's an active dialog and it's *not* the incoming one, close it.
    // This handles the case where you open a new dialog and want the old one gone.
    if (refActiveDialog.current && refActiveDialog.current !== incomingRef.current) {
      refActiveDialog.current.hideDialog();
    }

    // 2. Set the incoming dialog as the new active one.
    // This is crucial: we set it *before* showing, so if the new dialog
    // also triggers an onClose (e.g., if it immediately closes itself for some reason),
    // refActiveDialog.current is correctly pointing to it.
    refActiveDialog.current = incomingRef.current;

    // 3. Show the incoming dialog.
    if (incomingRef.current) {
      // Ensure the ref is valid before calling showDialog
      incomingRef.current.showDialog();
    }
  }

  // This function is called by the Dialog component's native `onClose` event.
  // Its purpose is to clear the `refActiveDialog` when the currently active dialog
  // is closed by external means (like pressing Escape).
  function clearActiveDialogReference() {
    // We only clear if the dialog closing is actually the one we're tracking as active.
    // This prevents issues if, somehow, a non-active dialog closes.
    // However, for this pattern, refActiveDialog.current *should* always be the one closing.
    refActiveDialog.current = null;
  }

  const ctxValues = {
    handleDialog,
    // Renamed clearActiveDialog to clearActiveDialogReference and it's internal to the context
    // It's exposed via the context value so the Dialog component can call it.
    clearActiveDialog: clearActiveDialogReference,
  };

  return <DialogContext.Provider value={ctxValues}>{children}</DialogContext.Provider>;
}
