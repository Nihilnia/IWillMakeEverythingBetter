import { useContext, useRef, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductDetailModal from "./ProductDetailModal";

export default function ProductCard({ product }) {
	const [isHover, setIsHover] = useState(false);
	const { addToCart, removeFromCart } = useContext(ProductContext);

	const { id, name, description, price, isInStock, image } = product;

	const refDetails = useRef();

	function handleDetails() {
		console.log("asdas");
		refDetails.current.showDetails();
	}

	return (
		<div
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			className="group"
		>
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
				{isHover && (
					<div
						className="absolute inset-0 bg-[rgba(0,0,0,0.3)]
                    text-white flex items-center justify-center z-20"
						onClick={handleDetails}
					>
						<p className="text-xl font-bold">See Details</p>
					</div>
				)}
			</div>
			<ProductDetailModal ref={refDetails} product={product} />
		</div>
	);
}
