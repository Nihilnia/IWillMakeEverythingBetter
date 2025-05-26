import { createContext, useReducer } from "react";
import { allProducts as dbProducts } from "../database/products";

export const ProductContext = createContext({
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
			let shallowCopy = [...state];

			const findProduct = shallowCopy.find((prd) => {
				return prd.id === productID;
			});

			if (findProduct !== undefined) {
				console.log("prd exists");
				shallowCopy = shallowCopy.map((prd) => {
					return prd.id === productID ? { ...prd, piece: prd.piece + 1 } : prd;
				});
				return shallowCopy;
			}
			console.log("prd not exists");
			const getProduct = dbProducts.find((prd) => {
				return prd.id === productID;
			});

			return [...shallowCopy, { ...getProduct, piece: 1 }];
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
	const [cart, dispatch] = useReducer(CartReducer, []);

	console.log("cart");
	console.log(cart);

	function addToCart(productID) {
		dispatch({
			type: "ADD_PRODUCT",
			payload: {
				productID: productID,
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
		allProducts: dbProducts,
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
