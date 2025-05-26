import { useContext, useRef } from "react";
import { createPortal } from "react-dom";
import { ProductContext } from "../context/ProductContext";

export default function ProductDetailModal({
	product,
	isModal,
	onHideDetails,
}) {
	const { id, name, description, price, isInStock, image } = product;
	const { addToCart } = useContext(ProductContext);
	const refDialog = useRef();

	if (refDialog.current) {
		if (isModal) refDialog.current.showModal();
		else refDialog.current.close();
	}

	function handleAddToCart() {
		addToCart(id);
	}

	return createPortal(
		<dialog
			ref={refDialog}
			className="max-w-[%100] w-[30%] rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
			onClose={onHideDetails}
			onClick={(e) => {
				if (e.target === refDialog.current) refDialog.current.close();
			}}
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
