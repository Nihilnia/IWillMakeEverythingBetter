import { use, useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCardUI from "./UI/ProductCardUI";

export default function ProductList() {
	const { allProducts, categories } = useContext(ProductContext);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [selectedPrice, setSelectedPrice] = useState(false);
	const [selectedStock, setSelectedStock] = useState(false);

	useEffect(() => {
		setFilteredProducts((prev) => {
			let updatedFilterList = [...allProducts];

			if (selectedCategories.length > 0) {
				updatedFilterList = updatedFilterList.filter((product) => {
					if (selectedCategories.includes(product.category)) {
						return product;
					}
				});
			} else {
				updatedFilterList = [...allProducts];
			}

			if (selectedPrice) {
				if (selectedPrice === "lowToHigh") {
					updatedFilterList = updatedFilterList.sort(
						(f, y) => f.price - y.price,
					);
				} else {
					updatedFilterList = updatedFilterList.sort(
						(f, y) => y.price - f.price,
					);
				}
			}

			if (selectedStock) {
				updatedFilterList = updatedFilterList.filter((product) => {
					return product.inStock === selectedStock;
				});
			}

			return updatedFilterList;
		});
	}, [allProducts, selectedCategories, selectedPrice, selectedStock]);

	console.log("filteredProducts");
	console.log(filteredProducts);

	console.log("selectedCategories");
	console.log(selectedCategories);

	console.log("selectedPrice");
	console.log(selectedPrice);

	function handleCategories(e) {
		const checkValue = e.target.value;
		const isChecked = e.target.checked;

		if (isChecked) {
			setSelectedCategories((prev) => {
				return [...prev, checkValue];
			});
		} else {
			setSelectedCategories((prev) => {
				return selectedCategories.filter((f) => f !== checkValue);
			});
		}
	}

	function handlePrices(e) {
		const val = e.target.value;
		const isChecked = e.target.checked;

		if (isChecked) {
			setSelectedPrice(val);
		} else {
			setSelectedPrice(false);
		}
	}

	function handleStock(e) {
		const isChecked = e.target.checked;

		if (isChecked) {
			setSelectedStock(true);
		} else {
			setSelectedStock(false);
		}
	}

	return (
		<>
			<div>
				<div>
					<h2>Show only in stock:</h2>
					<input
						type="checkbox"
						id="inStock"
						name="inStock"
						value="inStock"
						checked={selectedStock}
						onChange={handleStock}
					/>
					<label htmlFor="inStock">In stock</label>
				</div>
				<div>
					<h2>Order by price:</h2>
					<div>
						<input
							type="checkbox"
							id="lowToHigh"
							name="lowToHigh"
							value="lowToHigh"
							checked={selectedPrice === "lowToHigh"}
							onChange={handlePrices}
						/>
						<label htmlFor="lowToHigh">Low to high</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="highToLow"
							name="highToLow"
							value="highToLow"
							checked={selectedPrice === "highToLow"}
							onChange={handlePrices}
						/>
						<label htmlFor="highToLow">High to low</label>
					</div>
				</div>
				<div>
					<h2>Filter by categories:</h2>
					<div>
						<div>
							{categories.map((cat) => {
								return (
									<div key={cat}>
										<input
											type="checkbox"
											id={cat}
											name={cat}
											value={cat}
											checked={selectedCategories.includes(cat)}
											onChange={handleCategories}
										/>
										<label htmlFor={cat}>{cat}</label>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-4">
				{filteredProducts.map((product) => {
					return <ProductCardUI key={product.id} product={product} />;
				})}
			</div>
		</>
	);
}
