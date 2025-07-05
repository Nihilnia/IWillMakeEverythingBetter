import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import FoodContextProvider from "./context/FoodContext";

export default function App() {
  return (
    <FoodContextProvider>
      <Navbar />
      <FoodList />
    </FoodContextProvider>
  );
}
