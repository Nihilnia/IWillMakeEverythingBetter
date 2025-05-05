import "./App.css";
import ProductList from "./components/ProductList";
import ProductContextProvider from "./context/ProductContext";

export default function App() {
	return (
		<section>
			<h2>Hello World</h2>
			<ProductContextProvider>
				<ProductList />
			</ProductContextProvider>
		</section>
	);
}
