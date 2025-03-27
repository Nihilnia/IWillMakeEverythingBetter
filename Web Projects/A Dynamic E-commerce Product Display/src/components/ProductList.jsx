import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState({
    allProducts: [],
    sortBy: "default",
    //default- as they come from api
    //higToLow and lowToHigh
  });

  useEffect(() => {
    const link = "https://api.escuelajs.co/api/v1/products?offset=0&limit=10";
    fetch(link)
      .then((response) => response.json())
      .then((json) =>
        setProducts((prev) => {
          return { ...prev, allProducts: [...json] };
        })
      );
  }, []);

  const render = products.allProducts.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  return (
    <section className="grid grid-cols-4 max-w-[80%] m-auto gap-10">
      {render}
    </section>
  );
}
