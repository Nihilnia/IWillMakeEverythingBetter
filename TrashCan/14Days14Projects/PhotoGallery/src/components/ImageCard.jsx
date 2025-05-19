import { useRef, useState } from "react";
import ImageDialog from "./UI/ImageDialog";

export default function ImageCard({ imageAlt, imageSrc, author, title }) {
	const refDialog = useRef();

	function handleClick() {
		refDialog.current.openDialog();
	}

	return (
		<>
			<div
				onClick={handleClick}
				className={`overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border-amber-400 border-[0.5px]`}
			>
				{/* Image container with aspect ratio */}
				<div className="relative h-48 w-full sm:h-56 md:h-64 lg:h-72 overflow-hidden">
					<img
						src={imageSrc}
						alt={imageAlt}
						className="h-full w-full object-cover transition-transform duration-300 hover:scale-105 max-w-screen w-screen"
					/>
					{/* Gradient overlay for better text readability */}
					<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
				</div>

				{/* Content section */}
				<div className="p-4">
					<h3 className="mb-2 truncate text-lg font-bold text-gray-800 sm:text-xl md:text-2xl">
						{title}
					</h3>
					<p className="text-sm text-gray-600">
						By <span className="font-medium">{author}</span>
					</p>
				</div>
			</div>

			<ImageDialog ref={refDialog} imgSrc={imageSrc} imgAlt={imageAlt} />
		</>
	);
}
