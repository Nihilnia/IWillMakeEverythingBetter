import { useState } from "react";

export default function Input({ label, name, errorMsg, onHandleUserIntel }) {
	const [inputVal, setInputVal] = useState("");
	const [isLostFocus, setIsLostFocus] = useState(false);

	function handleLostFocus() {
		setIsLostFocus(true);
		if (!isInputInvalid) onHandleUserIntel(name, inputVal);
	}

	function handleInputValue(e) {
		setInputVal(e.target.value);
	}

	const isInputInvalid = isLostFocus && inputVal === "";

	console.log("isInputInvalid");
	console.log(isInputInvalid);

	return (
		<>
			<label htmlFor={name}>{label}</label>
			<input
				id={name}
				type={name}
				name={name}
				onChange={(e) => handleInputValue(e)}
				onBlur={handleLostFocus}
				value={inputVal}
			/>
			{isInputInvalid && (
				<div className="control-error">
					<p>{errorMsg}</p>
				</div>
			)}
		</>
	);
}
