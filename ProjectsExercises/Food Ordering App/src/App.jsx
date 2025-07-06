import { useState } from "react";
import CartDialog from "./components/CartDialog";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import FoodContextProvider from "./context/FoodContext";

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleToggleCart() {
    setIsCartOpen((prev) => {
      return !prev;
    });
  }

  return (
    <FoodContextProvider>
      <Navbar onSetIsCartOpen={handleToggleCart} />
      <FoodList />
      {isCartOpen && <CartDialog onSetIsCartOpen={handleToggleCart} />}
    </FoodContextProvider>
  );
}
