import Login from "./components/auth/Login";

import "./App.css";
import AuthContextProvider from "./components/auth/AuthContext";
import RouterContextProvider, {
	RouterContext,
} from "./components/router/RouterContext";
import { useContext } from "react";
import Register from "./components/auth/Register";
import { useState } from "react";

import ProductList from "./components/products/ProductList";

export default function App() {
	const { currentPage } = useContext(RouterContext);

	//Why do we need it?
	const [mCurrentPage, setMCurrentPage] = useState("signIn");

	function handleMCurrentPage(page) {
		setMCurrentPage(page);
	}

	console.log("App current page");
	console.log(currentPage);

	return (
		<RouterContextProvider handleMCurrentPage={handleMCurrentPage}>
			<section>
				<AuthContextProvider>
					{mCurrentPage === "signIn" && <Login />}
					{mCurrentPage === "signUp" && <Register />}
				</AuthContextProvider>
				{mCurrentPage === "home" && <ProductList />}
			</section>
		</RouterContextProvider>
	);
}
