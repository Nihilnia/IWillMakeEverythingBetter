import { createContext, useEffect, useState } from "react";

export const DialogContext = createContext({
  handleDialog: () => {},
  clearActiveDialog: () => {},
});

export default function DialogContextProvider({ children }) {
  const [sourceRef, setSourceRef] = useState(null);

  function handleDialog(sourceRef) {
    setSourceRef(sourceRef);
  }

  function clearActiveDialog() {
    if (sourceRef?.current?.open === false) {
      setSourceRef(null);
    } else if (!sourceRef?.current) {
      setSourceRef(null);
    }
  }

  useEffect(() => {
    if (sourceRef?.current) {
      sourceRef.current.showDialog();
    }

    return () => {
      sourceRef?.current.hideDialog();
    };
  }, [sourceRef]);

  const ctxValues = {
    handleDialog,
    clearActiveDialog,
  };

  console.log("sourceRef");
  console.log(sourceRef);

  return <DialogContext.Provider value={ctxValues}>{children}</DialogContext.Provider>;
}
