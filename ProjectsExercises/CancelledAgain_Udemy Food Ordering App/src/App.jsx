import FoodList from "./components/FoodList";
import Header from "./components/Header";
import FoodContextProvider from "./context/FoodContext";

function App() {
  return (
    <>
      <FoodContextProvider>
        <Header />
        <FoodList />
      </FoodContextProvider>
    </>
  );
}

export default App;
