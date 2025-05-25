import { useContext, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { ProductContext } from "../context/ProductContext";

export default function ProductDetailModal({ product, ref }) {
	const refDialog = useRef();

	const { id, name, description, price, isInStock, image } = product;
	const { addToCart } = useContext(ProductContext);

	useImperativeHandle(ref, () => {
		return {
			showDetails() {
				refDialog.current.showModal();
			},
		};
	});

	function handleBackdropClick(e) {
		if (e.target === refDialog.current) refDialog.current.close();
	}

	function handleAddToCart() {
		addToCart(id);
	}

	return createPortal(
		<dialog
			ref={refDialog}
			className="max-w-[%100] w-[30%] rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
			onClick={handleBackdropClick}
		>
			<div>
				<img src={image} alt={name} className="max-w-[100%]" />
			</div>
			<div className="text-center">
				<div>
					<h2>{name}</h2>
				</div>
				<div>
					<h3>{description}</h3>
				</div>
				<div className="flex justify-center gap-10">
					<span>Available: {isInStock ? "Yes" : "No"}</span>
					<span>${price}</span>
				</div>
				<div onClick={handleAddToCart}>Add to cart</div>
			</div>
		</dialog>,
		document.getElementById("modal"),
	);
}
