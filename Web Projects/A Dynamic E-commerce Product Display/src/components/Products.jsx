import { useEffect, useState } from "react";
import ProductsList from "./ProductsList";

export default function Products({ onAddToChart, onShowDetails }) {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=16")
      .then((response) => response.json())
      .then((json) => setAllProducts(json));
  }, []);

  console.log("allProducts");
  console.log(allProducts);

  let render = "Products are loading..";

  if (allProducts.length > 0)
    render = (
      <ProductsList
        allProducts={allProducts}
        onAddToChart={onAddToChart}
        onShowDetails={onShowDetails}
      />
    );

  return <section className="max-w-[70%] m-auto">{render}</section>;
}
