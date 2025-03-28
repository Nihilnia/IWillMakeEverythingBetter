import { useContext, useImperativeHandle, useRef } from "react";
import { CartContext } from "../context/CartContext";

export default function CartModal({ ref }) {
  const { cartItems, handleCartOps } = useContext(CartContext);

  const refDialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      openCart() {
        refDialog.current.showModal();
      },
      closeCart() {
        refDialog.current.close();
      },
    };
  });

  let subTotal = 0;

  cartItems.forEach((item) => {
    subTotal += item.howMany * item.price;
  });

  const render =
    cartItems.length > 0
      ? cartItems.map((item) => {
          return (
            <li
              key={item.id}
              className="flex justify-center items-center gap-4 mx-6 my-10 shadow-xl shadow- rounded-md p-4"
            >
              <span className="flex-1">{item.title}</span>
              <div className="flex-1 flex justify-center items-center">
                <img
                  src={item.images[0]}
                  className="max-w-[100%] rounded-md"
                  alt={item.title}
                />
              </div>
              <div className="flex-1 flex flex-col items-center">
                <span>{item.category.name}</span>
                <span>${item.price}</span>
                <span>({item.howMany} in the cart.)</span>
                <div className="flex gap-2">
                  <button
                    className="bg-amber-400 px-2 text-2xl rounded-md"
                    onClick={() => handleCartOps("ADD_PRODUCT", item)}
                  >
                    +
                  </button>
                  <button
                    className="bg-blue-500 px-2 text-2xl rounded-md"
                    onClick={() => handleCartOps("REMOVE_PRODUCT", item)}
                  >
                    -
                  </button>
                </div>
              </div>
            </li>
          );
        })
      : "There' s no item in your chart yet.";

  return (
    <dialog ref={refDialog} className="max-w-[30%] m-auto rounded-md pb-4">
      <ul>{render}</ul>
      <div className="max-w-fit m-auto">Total: ${subTotal}</div>
      <form method="dialog" className="flex justify-center gap-2">
        <button className="bg-[#0c0c0d] text-[#fff] rounded-md px-4 py-1">
          Close
        </button>
        <button
          type="button"
          className="bg-cyan-600 text-[#fff] rounded-md px-4 py-1"
        >
          Proceed
        </button>
      </form>
    </dialog>
  );
}
