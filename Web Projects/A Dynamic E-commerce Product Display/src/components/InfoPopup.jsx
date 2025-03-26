import { useEffect } from "react";

export default function InfoPopup({ show, onSetPop }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onSetPop(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [show, onSetPop]);

  return (
    show && (
      <div
        className="fixed bottom-2 left-2
    bg-amber-500 rounded-3xl p-2"
      >
        Product added to the cart.
      </div>
    )
  );
}
