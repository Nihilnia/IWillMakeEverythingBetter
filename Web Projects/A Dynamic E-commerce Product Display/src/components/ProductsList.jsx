import Product from "./Product";

export default function ProductsList({ allProducts }) {
  const render = allProducts.map((product) => {
    return <Product key={product.id} product={product} />;
  });

  return (
    <section className="grid gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {render}
    </section>
  );
}
