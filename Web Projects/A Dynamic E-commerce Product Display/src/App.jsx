import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import InfoPopup from "./components/InfoPopup";
import ProductDetails from "./components/ProductDetails";

export default function App() {
  const [cart, setCart] = useState([]);
  const [showPop, setShowPop] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();

  const cartModal = useRef();
  const detailsModal = useRef();

  let cartCount = 0;
  cart.forEach((prd) => {
    cartCount += prd.piece;
  });

  function handleAddToCart(prd) {
    setCart((prev) => {
      let updatedCart = [...prev];

      const productIndex = updatedCart.findIndex((f) => f.id === prd.id);

      if (productIndex === -1) {
        updatedCart.push({ ...prd, piece: 1 });
      } else {
        updatedCart[productIndex] = {
          ...updatedCart[productIndex],
          piece: updatedCart[productIndex].piece + 1,
        };
      }

      setShowPop(true);
      return updatedCart;
    });
  }

  function handleToggleCart() {
    cartModal.current.openCart();
  }

  function handleShowDetails(prd) {
    setSelectedProduct(prd);
    detailsModal.current.openDetails();
  }

  return (
    <section>
      <InfoPopup show={showPop} onSetPop={setShowPop} />

      <ProductDetails ref={detailsModal} product={selectedProduct} />

      <Cart addedProducts={cart} ref={cartModal} />
      <Navbar howMany={cartCount} onToggleCart={handleToggleCart} />
      <Products
        onAddToChart={handleAddToCart}
        onShowDetails={handleShowDetails}
      />
    </section>
  );
}
