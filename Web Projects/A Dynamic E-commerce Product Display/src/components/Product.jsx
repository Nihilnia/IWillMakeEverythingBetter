import { useState } from "react";

export default function Product({ product, onAddToChart, onShowDetails }) {
  const { category, description, images, price, title } = product;

  const [formattedDescription, setFormattedDescription] = useState({
    isShort: true,
    content: description.slice(0, 50),
  });

  function toggleDescription() {
    setFormattedDescription((prev) => {
      if (prev.isShort) {
        return { isShort: !prev.isShort, content: description };
      } else {
        return { isShort: !prev.isShort, content: description.slice(0, 50) };
      }
    });
  }

  function handleAddToChart() {
    onAddToChart(product);
  }
  function handleDetails() {
    onShowDetails(product);
  }

  return (
    <div>
      <div className="hover:opacity-80">
        <img src={images[0]} alt={description} className="rounded-lg" />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <span className="font-bold">Title: </span>
          <span>{title}</span>
        </div>
        <div>
          <span className="font-bold">Description: </span>
          <span>
            {formattedDescription.content}..
            <span
              onClick={toggleDescription}
              className="cursor-pointer text-[12px] opacity-50"
            >
              [show {formattedDescription.isShort ? "more" : "less"}]
            </span>
          </span>
        </div>
        <div>
          <span className="font-bold">Price: </span>
          <span>{price}$</span>
        </div>
        <div>
          <span className="font-bold">Category: </span>
          <span>{category.name}</span>
        </div>
        <div>
          <button
            className="bg-[red] rounded-sm px-2 py-1 hover:bg-[orange] cursor-pointer"
            onClick={handleAddToChart}
          >
            Add to chart
          </button>
          <button
            className="bg-[yellow] rounded-sm px-2 py-1 hover:bg-[orange] cursor-pointer"
            onClick={handleDetails}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
