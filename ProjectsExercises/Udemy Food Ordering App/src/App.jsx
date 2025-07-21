import FoodList from "./components/FoodList";
import FoodContextProvider from "./context/FoodContext";

function App() {
  return (
    <>
      <FoodContextProvider>
        <FoodList />
      </FoodContextProvider>
    </>
  );
}

export default App;
