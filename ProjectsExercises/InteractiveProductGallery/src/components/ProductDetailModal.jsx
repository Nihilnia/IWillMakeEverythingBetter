import { useRef } from "react";
import { createPortal } from "react-dom";

export default function ProductDetailModal({
	product,
	isModal,
	onHideDetails,
}) {
	const { id, name, description, price, isInStock, image } = product;

	const refDialog = useRef();

	if (refDialog.current) {
		if (isModal) refDialog.current.showModal();
		else refDialog.current.close();
	}

	return createPortal(
		<dialog
			ref={refDialog}
			className="max-w-[%100] w-[30%] rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
			onClose={onHideDetails}
			onClick={onHideDetails}
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
				<div>Add to cart</div>
			</div>
		</dialog>,
		document.getElementById("modal"),
	);
}
