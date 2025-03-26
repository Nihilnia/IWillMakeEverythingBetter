import { useState } from "react";
import Product from "./Product";

export default function ProductsList({
  allProducts,
  onAddToChart,
  onShowDetails,
}) {
  const [filterBy, setFilterBy] = useState({
    selectedOption: "default",
    productList: [...allProducts],
  });

  function handleFilter(option) {
    let sortedProducts = [...allProducts];

    switch (option) {
      case "highToLow":
        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        break;

      case "lowToHigh":
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        break;

      default:
        break;
    }

    setFilterBy({
      selectedOption: option,
      productList: sortedProducts,
    });
  }

  const render = filterBy.productList.map((product) => {
    return (
      <Product
        key={product.id}
        product={product}
        onAddToChart={onAddToChart}
        onShowDetails={onShowDetails}
      />
    );
  });

  return (
    <div>
      <div className="flex justify-center m-4 max-w-full w-full">
        <select onChange={(e) => handleFilter(e.target.value)}>
          <option value="default">Sorted by default</option>
          <option value="highToLow">High to low</option>
          <option value="lowToHigh">Low to high</option>
        </select>
      </div>

      <section className="grid gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {render}
      </section>
    </div>
  );
}
