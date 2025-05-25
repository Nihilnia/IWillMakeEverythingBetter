import ProductList from "./components/ProductList";
import ProductContextProvider from "./context/ProductContext";

export default function App() {
	return (
		<section className="w-[90%] m-auto">
			<ProductContextProvider>
				<ProductList />
			</ProductContextProvider>
		</section>
	);
}
