import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { CartContextProvider } from "./context/CartContext";

export default function App() {
  return (
    <section>
      <CartContextProvider>
        <Navbar />
        <ProductList />
      </CartContextProvider>
    </section>
  );
}
