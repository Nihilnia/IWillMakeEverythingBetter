import { useRef } from "react";

export default function SearchBar({ onSearch }) {
	const refSearch = useRef();

	function handleClickSearch() {
		onSearch(refSearch.current.value);
	}

	return (
		<div className="flex gap-4">
			<span className="text-lg">Search any product</span>
			<input
				type="text"
				ref={refSearch}
				onChange={handleClickSearch}
				className="bg-white text-black py-1 px-2 rounded"
			/>
		</div>
	);
}
