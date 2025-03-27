import Product from "./components/Product.jsx";
import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";

import CartContextProvider from "./store/ShoppingCartContext.jsx";

function App() {
  return (
    <CartContextProvider>
      {/* All these children will get the value (ctxValue) we are returning from CartContextProvider */}
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
