import MealList from "./components/MealList";
import FoodContextProvider from "./context/FoodContext";

function App() {
  return (
    <>
      <FoodContextProvider>
        <MealList />
      </FoodContextProvider>
    </>
  );
}

export default App;
