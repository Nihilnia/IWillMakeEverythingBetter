import { useContext, useRef } from "react";
import { ProductContext } from "../context/ProductContext";
import { createPortal } from "react-dom";

export default function CartModal({ isCartOpen, onCloseCart }) {
	const refDialog = useRef();

	const { cart } = useContext(ProductContext);

	if (refDialog.current) {
		if (isCartOpen) refDialog.current.showModal();
		else refDialog.current.close();
	}

	function handleCloseCart() {
		onCloseCart();
	}

	let totalPrice = 0;

	return createPortal(
		<dialog
			ref={refDialog}
			onClose={handleCloseCart}
			className="w-[50%] m-auto pt-4 px-4 rounded-xl bg-gradient-to-b from-amber-200 to-amber-400"
		>
			<div className="flex justify-space gap-4">
				{cart.map((product) => {
					const { id, name, image, piece, price } = product;
					totalPrice = piece * price;
					return (
						<div key={id} className="group">
							<div className="flex flex-col">
								<span className="text-lg">{name}</span>
								<span className="text-md">In cart: {piece}</span>
							</div>
							<div className="relative overflow-hidden rounded">
								<img
									src={image}
									alt={name}
									className="w-full h-full object-cover
													transform
													transition-transform
													duration-300
													ease-in-out
													group-hover:scale-115"
								/>
							</div>
						</div>
					);
				})}
			</div>
			<div className="flex justify-center gap-3 items-center mt-2">
				<span>Total: ${totalPrice}</span>
				<button
					type="button"
					class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2"
				>
					Close
				</button>
			</div>
		</dialog>,
		document.getElementById("cart"),
	);
}
