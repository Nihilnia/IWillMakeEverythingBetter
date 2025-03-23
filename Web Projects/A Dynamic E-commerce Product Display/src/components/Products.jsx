import { useEffect, useState } from "react";
import ProductsList from "./ProductsList";

export default function Products() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=16")
      .then((response) => response.json())
      .then((json) => setAllProducts(json));
  }, []);

  console.log(allProducts);

  return (
    <section className="max-w-[70%] m-auto">
      <h2>All Products</h2>
      <ProductsList allProducts={allProducts} />
    </section>
  );
}
