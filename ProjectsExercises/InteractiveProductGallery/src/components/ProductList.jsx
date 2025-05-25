import { useContext, useRef, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import CartModal from "./CartModal";

export default function ProductList() {
	const { allProducts } = useContext(ProductContext);

	const [searchQuery, setSearchQuery] = useState(null);

	function handleSearchQuery(query) {
		setSearchQuery(query);
	}

	let filteredResult = null;

	if (searchQuery !== null) {
		const filteredProducts = [...allProducts].filter((product) => {
			return product.name.includes(searchQuery);
		});

		console.log(filteredProducts);

		filteredResult = filteredProducts.map((product) => {
			return <ProductCard key={product.id} product={product} />;
		});
	}

	const refCartDialog = useRef();

	function handleClickCart() {
		refCartDialog.current.showCart();
	}

	return (
		<>
			<section className="flex justify-between">
				<SearchBar onSearch={handleSearchQuery} />
				<CartIcon onClick={handleClickCart} />
				<CartModal ref={refCartDialog} />
			</section>
			<section className="grid grid-cols-4 gap-4">
				{searchQuery === null &&
					allProducts.map((product) => {
						return <ProductCard key={product.id} product={product} />;
					})}
				{searchQuery !== null && filteredResult}
			</section>
		</>
	);
}
