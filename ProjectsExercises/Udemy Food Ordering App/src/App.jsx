import Header from "./components/Header";
import MealList from "./components/MealList";
import FoodContextProvider from "./context/FoodContext";

function App() {
  return (
    <>
      <FoodContextProvider>
        <Header />
        <MealList />
      </FoodContextProvider>
    </>
  );
}

export default App;
