import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { RouterContext } from "../router/RouterContext";

export default function Register() {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const { addUser } = useContext(AuthContext);
	const { handleCurrentPage } = useContext(RouterContext);

	function handleSubmit() {
		const newUser = { username: username, password: password };

		addUser(newUser);
	}

	function handleLoginButton() {
		handleCurrentPage("signIn");
	}

	return (
		<div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-2 text-center">Login</h2>
			<p className="text-gray-500 text-center mb-6">Register</p>

			<form onSubmit={handleSubmit} className="space-y-4">
				<div className="space-y-2">
					<label
						htmlFor="username"
						className="block text-sm font-medium text-gray-700"
					>
						Username
					</label>
					<input
						id="username"
						type="text"
						placeholder="Enter your username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					/>
				</div>

				<div className="space-y-2">
					<label
						htmlFor="password"
						className="block text-sm font-medium text-gray-700"
					>
						Password
					</label>
					<input
						id="password"
						type="password"
						placeholder="••••••••"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
				>
					Sign In
				</button>
				<div className="text-red-400">
					Alread have an account? <span onClick={handleLoginButton}>Login</span>
				</div>
			</form>
		</div>
	);
}
