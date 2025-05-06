import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const RouterContext = createContext({
	currentPage: "signIn",
	handleCurrentPage: () => {},
});

export default function RouterContextProvider({
	children,
	handleMCurrentPage,
}) {
	const [currentPage, setCurrentPage] = useState("signIn");

	function handleCurrentPage(page) {
		setCurrentPage(page);
	}

	//Why do we need it?
	useEffect(() => {
		handleMCurrentPage(currentPage);
	}, [currentPage]);

	const ctxValues = {
		currentPage: currentPage,
		handleCurrentPage: handleCurrentPage,
	};

	console.log("currentPage");
	console.log(currentPage);

	return (
		<RouterContext.Provider value={ctxValues}>
			{children}
		</RouterContext.Provider>
	);
}
