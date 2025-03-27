import { useImperativeHandle, useRef } from "react";

export default function ProductDetailsModal({ product, ref }) {
  const refDialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      openDetails() {
        refDialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={refDialog}>
      <div key={product.id}>
        <div>
          <h2>Title: {product.title}</h2>
          <img src={product.images[0]} alt={product.description} />
        </div>
        <div>
          <h2>Description: {product.description}</h2>
          <h2>Category: {product.category.name}</h2>
          <h2>Price: {product.price}</h2>
        </div>
        <form method="dialog">
          <button>Close</button>
        </form>
      </div>
    </dialog>
  );
}
