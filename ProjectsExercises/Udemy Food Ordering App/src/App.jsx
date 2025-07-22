import FoodList from "./components/FoodList";
import Header from "./components/Header";
import DialogContextProvider from "./context/DialogContext";
import FoodContextProvider from "./context/FoodContext";

function App() {
  return (
    <FoodContextProvider>
      <DialogContextProvider>
        <Header />
      </DialogContextProvider>

      <FoodList />
    </FoodContextProvider>
  );
}

export default App;
