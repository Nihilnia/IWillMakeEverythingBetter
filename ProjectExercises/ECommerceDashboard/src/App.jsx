import Login from "./components/auth/Login";

import "./App.css";
import AuthContextProvider from "./components/auth/AuthContext";
import RouterContextProvider, {
	RouterContext,
} from "./components/router/RouterContext";
import { useContext } from "react";
import Register from "./components/auth/Register";
import { useState } from "react";

export default function App() {
	const { currentPage } = useContext(RouterContext);

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
			</section>
		</RouterContextProvider>
	);
}
