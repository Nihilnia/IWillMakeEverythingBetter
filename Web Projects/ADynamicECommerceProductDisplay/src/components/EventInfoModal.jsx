import { useEffect, useRef } from "react";

export default function EventInfoModal({ onIsInfoDialog, onSetIsInfoDialog }) {
  useEffect(() => {
    if (onIsInfoDialog) {
      setTimeout(() => {
        onSetIsInfoDialog(false);
      }, 2000);
    }
  }, [onIsInfoDialog]);

  const refDialog = useRef();

  return (
    <div
      ref={refDialog}
      className="fixed bottom-4 left-4 bg-amber-50 text-gray-950
    p-4 rounded-sm"
    >
      <h2>Item added to cart.</h2>
    </div>
  );
}
