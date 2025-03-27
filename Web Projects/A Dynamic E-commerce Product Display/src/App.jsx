import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { CartContextProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartContextProvider>
      <section className="flex flex-col gap-4">
        <Navbar />
        <ProductList />
      </section>
    </CartContextProvider>
  );
}
