import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function CartIcon({ ...props }) {
	const { cart } = useContext(ProductContext);

	const cartCount = cart.length;

	const render = cartCount > 0 ? `Cart (${cartCount})` : "Cart is empty";

	return <div {...props}>{render}</div>;
}
