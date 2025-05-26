import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import CartModal from "./CartModal";

export default function ProductList() {
	const { allProducts } = useContext(ProductContext);
	const [searchQuery, setSearchQuery] = useState(null);
	const [isCartOpen, setIsCartOpen] = useState(false);

	function handleSearchQuery(query) {
		setSearchQuery(query);
	}

	let filteredResult = null;

	if (searchQuery !== null) {
		const filteredProducts = [...allProducts].filter((product) => {
			return product.name.toLowerCase().includes(searchQuery.toLowerCase());
		});

		console.log(filteredProducts);

		filteredResult = filteredProducts.map((product) => {
			return <ProductCard key={product.id} product={product} />;
		});
	}

	function handleOpenCart() {
		setIsCartOpen(true);
	}
	function handleCloseCart() {
		setIsCartOpen(false);
	}

	return (
		<>
			<div className="flex flex-col gap-4">
				<section className="flex justify-between">
					<SearchBar onSearch={handleSearchQuery} />
					<CartIcon onClick={handleOpenCart} />
					<CartModal isCartOpen={isCartOpen} onCloseCart={handleCloseCart} />
				</section>
				<section className="grid grid-cols-4 gap-4">
					{searchQuery === null &&
						allProducts.map((product) => {
							return <ProductCard key={product.id} product={product} />;
						})}
					{searchQuery !== null && filteredResult}
				</section>
			</div>
		</>
	);
}
