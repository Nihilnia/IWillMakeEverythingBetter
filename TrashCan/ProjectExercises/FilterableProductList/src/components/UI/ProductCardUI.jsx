export default function ProductCardUI({ product }) {
	const { name, price, category, description, inStock } = product;

	return (
		<div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
			{/* Product Image */}
			<div className="relative h-48 overflow-hidden">
				<img
					src={"/placeholder.svg"}
					alt={name}
					className="w-full h-full object-cover"
				/>
				<div className="absolute top-0 right-0 m-2">
					<span
						className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
							inStock
								? "bg-green-100 text-green-800"
								: "bg-red-100 text-red-800"
						}`}
					>
						{inStock ? "In Stock" : "Out of Stock"}
					</span>
				</div>
			</div>

			{/* Product Details */}
			<div className="p-5">
				<div className="flex justify-between items-start mb-2">
					<h2 className="text-xl font-bold text-gray-900 leading-tight">
						{name}
					</h2>
					<p className="text-lg font-bold text-gray-900">${price.toFixed(2)}</p>
				</div>

				<p className="text-sm text-gray-600 uppercase tracking-wide mb-3">
					{category}
				</p>

				<p className="text-gray-700 text-base mb-4 line-clamp-3">
					{description}
				</p>

				<div className="pt-2 border-t border-gray-200">
					<button
						className={`w-full py-2 px-4 rounded-md font-medium text-sm text-white ${
							inStock
								? "bg-indigo-600 hover:bg-indigo-700"
								: "bg-gray-400 cursor-not-allowed"
						} transition-colors duration-200`}
						disabled={!inStock}
					>
						{inStock ? "Add to Cart" : "Sold Out"}
					</button>
				</div>
			</div>
		</div>
	);
}
