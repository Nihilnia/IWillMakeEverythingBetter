import { useContext, useRef, useState } from "react";
import { CartContext } from "../context/CartContext";
import ProductDetailsModal from "./ProductDetailsModal";
import EventInfoModal from "./EventInfoModal";

export default function ProductCard({ product }) {
  const { title, price, description, category, images } = product;

  const [cartStatus, setCartStatus] = useState(0);
  const [isInfoDialog, setIsInfoDialog] = useState(false);

  const ctxData = useContext(CartContext);

  const refDetailsModal = useRef();

  function handleAddToCart() {
    setCartStatus((prev) => {
      return prev + 1;
    });

    ctxData.handleCartOps("ADD_PRODUCT", product);
    setIsInfoDialog(true);
  }

  function handleShowDetails() {
    refDetailsModal.current.openDetails();
  }

  return (
    <div>
      <div>
        <img src={images[0]} alt={description} />
        <h2>Title: {title}</h2>
        <h2>Description: {description}</h2>
        <h2>Category: {category.name}</h2>
        <h2>Price: {price}</h2>
      </div>
      <div>
        <button onClick={handleShowDetails}>Show details</button>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
      <div>
        {cartStatus > 0 && `Product added to cart: ${cartStatus} times.`}
      </div>
      <ProductDetailsModal ref={refDetailsModal} product={product} />
      {isInfoDialog && (
        <EventInfoModal
          onIsInfoDialog={isInfoDialog}
          onSetIsInfoDialog={setIsInfoDialog}
        />
      )}
    </div>
  );
}
