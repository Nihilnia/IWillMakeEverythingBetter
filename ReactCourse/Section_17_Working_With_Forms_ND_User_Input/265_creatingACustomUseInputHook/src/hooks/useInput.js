import { useState } from "react";

export default function useInput(defaultValue, validationFn) {
	const [enteredValue, setEnteredValue] = useState(defaultValue);
	const [isLostFocus, setIsLostFocus] = useState(false);

	const isValueInValid = validationFn(enteredValue);

	function handleUserIntel(event) {
		setEnteredValue(event.target.value);
		setIsLostFocus(false);
	}

	function handleLostFocus() {
		setIsLostFocus(true);
	}

	return {
		value: enteredValue,
		handleUserIntel,
		handleLostFocus,
		hasError: isLostFocus && !isValueInValid,
	};
}
