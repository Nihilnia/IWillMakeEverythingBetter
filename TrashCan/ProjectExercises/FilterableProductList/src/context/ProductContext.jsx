import { createContext, useState } from "react";

export const ProductContext = createContext({
	allProducts: [],
	categories: [],
});

export default function ProductContextProvider({ children }) {
	const [allProducts, setAllProducts] = useState([
		{
			id: Math.random(),
			name: "Laptop",
			price: 1200,
			category: "Electronics",
			description: "A high-performance laptop for work and play.",
			inStock: true,
		},
		{
			id: Math.random(),
			name: "Running Shoes",
			price: 80,
			category: "Sports",
			description: "Comfortable shoes for running and workouts.",
			inStock: true,
		},
		{
			id: Math.random(),
			name: "Coffee Maker",
			price: 75,
			category: "Kitchen Appliances",
			description: "Makes delicious coffee every morning.",
			inStock: false,
		},
		{
			id: Math.random(),
			name: "Smartphone",
			price: 1000,
			category: "Electronics",
			description: "A powerful smartphone with the latest features.",
			inStock: true,
		},
		{
			id: Math.random(),
			name: "T-Shirt",
			price: 25,
			category: "Clothing",
			description: "A comfortable cotton t-shirt for everyday wear.",
			inStock: true,
		},
		{
			id: Math.random(),
			name: "Gaming Mouse",
			price: 60,
			category: "Electronics",
			description: "High precision mouse for gaming.",
			inStock: true,
		},
		{
			id: Math.random(),
			name: "Office Chair",
			price: 150,
			category: "Furniture",
			description: "Ergonomic chair for comfortable work.",
			inStock: true,
		},
		{
			id: Math.random(),
			name: "Water Bottle",
			price: 15,
			category: "Sports",
			description: "Reusable water bottle, 1L capacity.",
			inStock: true,
		},
		{
			id: Math.random(),
			name: "Cookbook",
			price: 30,
			category: "Books",
			description: "A collection of delicious recipes.",
			inStock: false,
		},
		{
			id: Math.random(),
			name: "Tablet",
			price: 300,
			category: "Electronics",
			description: "10-inch tablet for entertainment and productivity.",
			inStock: true,
		},
	]);

	const categories = [];
	allProducts.map((product) => {
		if (!categories.includes(product.category)) {
			categories.push(product.category);
		}
	});

	const ctxValues = {
		allProducts: allProducts,
		categories: categories,
	};

	return (
		<ProductContext.Provider value={ctxValues}>
			{children}
		</ProductContext.Provider>
	);
}
