import { useRef } from "react";

export default function SearchBar({ onSearch }) {
	const refSearch = useRef();

	function handleClickSearch() {
		onSearch(refSearch.current.value);
	}

	return (
		<div>
			<input
				type="text"
				placeholder="Search any product.."
				ref={refSearch}
				onChange={handleClickSearch}
			/>
		</div>
	);
}
