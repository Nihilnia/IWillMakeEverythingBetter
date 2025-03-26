import { useImperativeHandle, useRef } from "react";

export default function ProductDetails({ product, ref }) {
  const { title, slug, description, images, price, category } = product;
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      openDetails() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog}>
      <div>
        <h2>Product: {title}</h2>
        <img src={images[0]} alt={description} />
      </div>
      <div>
        <h4>Specs:</h4>
        <h6>{description}</h6>
        <h6>Slug: {slug}</h6>
        <h6>price: {price}</h6>
        <h6>category: {category}</h6>
      </div>
      <form method="dialog">
        <button className="bg-blue-500 rounded-sm p-1">Close</button>
      </form>
    </dialog>
  );
}
