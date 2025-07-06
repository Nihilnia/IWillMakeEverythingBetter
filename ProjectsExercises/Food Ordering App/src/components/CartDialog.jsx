import { useContext, useEffect, useRef } from "react";
import { FoodContext } from "../context/FoodContext";

export default function CartDialog({ onSetIsCartOpen }) {
  const { cart, total } = useContext(FoodContext);
  const dialogRef = useRef(); // 1. Create a ref for the dialog element

  useEffect(() => {
    // 2. Use useEffect to control the dialog's open/close state
    const dialogElement = dialogRef.current;
    if (dialogElement) {
      dialogElement.showModal(); // Open as a modal, creating a backdrop
    }

    // Clean up function: close the dialog when component unmounts
    return () => {
      if (dialogElement) {
        dialogElement.close();
      }
    };
  }, []); // Run once on mount

  function handleOnClose() {
    onSetIsCartOpen();
    dialogRef.current.close(); // Close the dialog via its API
  }

  let render = null;

  if (cart.length > 0) {
    render = (
      <div>
        <div className="flex flex-row gap-2">
          {cart.map((f) => {
            return (
              <div key={f.id}>
                <img src={f.image} alt={f.name} className="rounded-lg" />
                <div className="flex flex-row justify-between">
                  <div>
                    {f.name} ({f.piece})
                  </div>
                  <div>{f.price}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row justify-between">
          <button type="button" onClick={handleOnClose}>
            Close
          </button>
          {/* Add onClick handler */}
          <button type="button">Checkout ({total})</button>
        </div>
      </div>
    );
  } else {
    render = (
      <div className="flex flex-col items-end">
        <h2>You did not add any food yet.</h2>
        <button type="button" onClick={handleOnClose}>
          Close
        </button>
      </div>
    );
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={handleOnClose}
      className="fixed inset-0 m-auto h-fit max-w-[50%] rounded-lg p-4"
    >
      {/* Remove 'open' prop, add ref */}
      {render}
    </dialog>
  );
}
