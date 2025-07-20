import { createContext, useEffect, useState } from "react";

export const DialogContext = createContext({
  dialogOptions: {},
  handleDialog: () => {},
});

export default function DialogContextProvider({ children }) {
  const [dialogOptions, setDialogOptions] = useState({ whichDialog: false, sourceRef: null });

  function handleDialog(whichDialog, source) {
    setDialogOptions({ whichDialog, sourceRef: source });
  }

  useEffect(() => {
    if (dialogOptions.sourceRef?.current) {
      dialogOptions.sourceRef.current.showDialog();
    }
  }, [dialogOptions]);

  const ctxValues = {
    dialogOptions,
    handleDialog,
  };

  console.log(dialogOptions);

  return <DialogContext.Provider value={ctxValues}>{children}</DialogContext.Provider>;
}
