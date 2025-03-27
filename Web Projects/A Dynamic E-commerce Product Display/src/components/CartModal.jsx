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

  return (
    <dialog ref={refDialog} className="open:flex flex-1/4">
      {cartItems.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <h2>Title: {item.title}</h2>
              <img src={item.images[0]} alt={item.description} />
            </div>
            <div>
              <h2>Description: {item.description}</h2>
              <h2>Category: {item.category.name}</h2>
              <h2>Price: {item.price}</h2>
            </div>
            <form method="dialog">
              <button>Close</button>
            </form>
          </div>
        );
      })}
    </dialog>
  );
}
