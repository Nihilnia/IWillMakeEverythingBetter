import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import DialogContextProvider from "./store/DialogContext";
import FoodContextProvider from "./store/FoodContext";

function App() {
  return (
    <>
      <FoodContextProvider>
        <DialogContextProvider>
          <Header />
          <FoodList />
          <Cart />
          <Checkout />
        </DialogContextProvider>
      </FoodContextProvider>
    </>
  );
}

export default App;
