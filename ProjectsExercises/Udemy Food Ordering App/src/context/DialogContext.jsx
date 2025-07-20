import { createContext, useEffect, useState } from "react";

export const DialogContext = createContext({
  handleDialog: () => {},
});

export default function DialogContextProvider({ children }) {
  const [sourceRef, setSourceRef] = useState(null);

  function handleDialog(sourceRef) {
    setSourceRef(sourceRef);
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
  };

  console.log("sourceRef");
  console.log(sourceRef);

  return <DialogContext.Provider value={ctxValues}>{children}</DialogContext.Provider>;
}
