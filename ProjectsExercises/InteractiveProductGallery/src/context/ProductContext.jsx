import { useContext, useReducer, useState } from "react";
import { allProducts as dbProducts } from "../database/products";

export const ProductContext = useContext({
	allProducts: [],
	cart: [],
	addToCart: [],
	removeFromCart: [],
});

function CartReducer(state, action) {
	const { type, payload } = action;
	const { productID } = payload;

	switch (type) {
		case "ADD_PRODUCT": {
			const foundProduct = allProducts.filter((prd) => {
				return prd.id === productID;
			});
			return [...state, { ...foundProduct }];
		}

		case "REMOVE_PRODUCT": {
			let shallowCopy = [...allProducts];
			shallowCopy = shallowCopy.filter((prd) => {
				return prd.id !== productID;
			});
			return shallowCopy;
		}
	}
}

export default function ProductContextProvider({ children }) {
	const [allProducts, setAllProducts] = useState([...dbProducts]);
	const [cart, dispatch] = useReducer(CartReducer, []);

	function addToCart(productID) {
		dispatch({
			type: "ADD_PRODUCT",
			payload: {
				newProduct: newProduct,
			},
		});
	}

	function removeFromCart(productID) {
		dispatch({
			type: "REMOVE_PRODUCT",
			payload: {
				productID: productID,
			},
		});
	}

	const ctxValues = {
		allProducts: allProducts,
		cart: cart,
		addToCart: addToCart,
		removeFromCart: removeFromCart,
	};

	return (
		<ProductContext.Provider value={ctxValues}>
			{children}
		</ProductContext.Provider>
	);
}
