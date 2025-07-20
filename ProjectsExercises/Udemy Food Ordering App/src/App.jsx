import Header from "./components/Header";
import MealList from "./components/MealList";
import DialogContextProvider from "./context/DialogContext";
import FoodContextProvider from "./context/FoodContext";

function App() {
  return (
    <>
      <FoodContextProvider>
        <DialogContextProvider>
          <Header />
          <MealList />
        </DialogContextProvider>
      </FoodContextProvider>
    </>
  );
}

export default App;
