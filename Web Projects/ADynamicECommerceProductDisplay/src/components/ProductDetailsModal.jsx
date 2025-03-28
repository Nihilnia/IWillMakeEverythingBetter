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
    <dialog
      ref={refDialog}
      className="p-4 rounded-md shadow-md max-w-md mx-auto"
    >
      <div key={product.id} className="flex flex-col gap-4">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
          <img
            src={product.images[0]}
            alt={product.description}
            className="rounded-md max-w-full h-auto"
          />
        </div>
        <div>
          <h2 className="text-lg font-medium">Description:</h2>
          <p className="text-gray-700">{product.description}</p>
          <h2 className="text-lg font-medium mt-2">Category:</h2>
          <p className="text-gray-700">{product.category.name}</p>
          <h2 className="text-lg font-medium mt-2">Price:</h2>
          <p className="text-gray-700">${product.price}</p>
        </div>
        <form method="dialog" className="flex justify-end">
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md">
            Close
          </button>
        </form>
      </div>
    </dialog>
  );
}
