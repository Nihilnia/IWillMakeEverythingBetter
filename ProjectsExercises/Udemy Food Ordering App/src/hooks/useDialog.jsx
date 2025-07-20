import { useState } from "react";

export default function useDialog() {
  const [isDialog, setIsDialog] = useState(false);

  function handleToggleDialog() {
    setIsDialog((prev) => {
      return !prev;
    });
  }

  return {
    isDialog,
    handleToggleDialog,
  };
}
