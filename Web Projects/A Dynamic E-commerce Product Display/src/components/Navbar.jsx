import { useContext, useRef } from "react";
import { CartContext } from "../context/CartContext";
import CartModal from "./CartModal";

export default function Navbar() {
  const refCartModal = useRef();

  const { cartItems } = useContext(CartContext);

  let cartTotalItemPiece = 0;

  cartItems.forEach((item) => {
    cartTotalItemPiece += item.howMany;
  });

  function handleShowCart() {
    refCartModal.current.openCart();
  }

  return (
    <section className="bg-amber-50 h-auto text-[#000] flex justify-between px-10 py-3">
      <div>Home</div>
      <div>A Dynamic E-commerce Product Display</div>
      <div onClick={handleShowCart}>Cart ({cartTotalItemPiece})</div>
      <CartModal ref={refCartModal} />
    </section>
  );
}
