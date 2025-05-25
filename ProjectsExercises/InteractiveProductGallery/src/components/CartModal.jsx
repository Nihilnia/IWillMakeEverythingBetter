import { useContext, useImperativeHandle, useRef } from "react";
import { ProductContext } from "../context/ProductContext";

export default function CartModal({ ref }) {
	const refDialog = useRef();

	const { cart } = useContext(ProductContext);

	useImperativeHandle(ref, () => {
		return {
			showCart() {
				refDialog.current.showModal();
			},
		};
	});

	console.log(`cart Modal`);
	console.log(cart);

	return (
		<dialog ref={refDialog}>
			<div>
				{cart.map((product) => {
					const { id, name, description, price, isInStock, image } = product;
					return (
						<div key={id}>
							<div>
								<span className="text-lg">{name}</span>
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
		</dialog>
	);
}
