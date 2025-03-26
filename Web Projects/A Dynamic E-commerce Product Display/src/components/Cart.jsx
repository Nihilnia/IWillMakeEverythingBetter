import { useImperativeHandle, useRef } from "react";

export default function Cart({ addedProducts, ref }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      openCart() {
        dialog.current.showModal();
      },
    };
  });

  let total = 0;
  let productImages = [];
  const render = addedProducts.map((product) => {
    const { id, title, price, images } = product;

    total += price;
    productImages.push(images[0]);

    return (
      <li key={id}>
        {title} (${price})
      </li>
    );
  });

  return (
    <dialog
      ref={dialog}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-100 rounded-md max-w-[24%]
      p-2"
    >
      <ul className="flex gap-2 flex-col">{render}</ul>
      <div className="mt-3 mb-3">
        <span className="font-bold">Total:</span> ${total}
      </div>
      <div className="flex flex-wrap mb-5">
        {productImages.map((image) => {
          return <img src={image} key={image} className="max-w-[20%]" />;
        })}
      </div>
      <form method="dialog">
        <button className="bg-blue-500 rounded-sm p-1">Close</button>
      </form>
    </dialog>
  );
}
