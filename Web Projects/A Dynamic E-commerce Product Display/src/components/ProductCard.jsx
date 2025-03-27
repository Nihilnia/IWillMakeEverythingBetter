import { useContext, useRef, useState } from "react";
import { CartContext } from "../context/CartContext";
import ProductDetailsModal from "./ProductDetailsModal";
import EventInfoModal from "./EventInfoModal";
import { foundation } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function ProductCard({ product }) {
  const { title, price, description, category, images } = product;

  const [cartStatus, setCartStatus] = useState(0);
  const [isInfoDialog, setIsInfoDialog] = useState(false);
  const [formattedDescription, setFormattedDescription] = useState({
    isShort: true,
    theDescription: product.description.slice(0, 150) + "..",
  });

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

  function handleDescription() {
    if (formattedDescription.isShort) {
      setFormattedDescription((prev) => {
        return { isShort: !prev.isShort, theDescription: product.description };
      });
    } else {
      setFormattedDescription((prev) => {
        return {
          isShort: !prev.isShort,
          theDescription: product.description.slice(0, 150) + "..",
        };
      });
    }
  }

  return (
    <div>
      <div className="flex flex-col gap-4">
        <img src={images[0]} alt={description} />
        <h1 className="text-xl font-bold">{title}</h1>
        <h2>
          {formattedDescription.theDescription}
          <span
            className="opacity-70 text-[13px] ml-1"
            onClick={handleDescription}
          >
            {formattedDescription.isShort ? "[more]" : "[less]"}
          </span>
        </h2>
        <div>
          <h2>Category: {category.name}</h2>
          <h2>Price: ${price}</h2>
        </div>
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
