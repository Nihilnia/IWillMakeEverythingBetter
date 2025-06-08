import { useState } from "react";
import Input from "./Input";

export default function Login() {
	const [userIntel, setUserIntel] = useState({
		email: "",
		password: "",
	});

	const [isLostFocus, setIsLostFocus] = useState({
		email: false,
		password: false,
	});

	const isInvalidEmail = isLostFocus.email && !userIntel.email.includes("@");
	const isInvalidPassowrd =
		isLostFocus.password && userIntel.password.trim().length < 6;

	function handleForm(e) {
		e.preventDefault();

		console.log(userIntel);
	}

	function handleUserIntel(identifier, event) {
		setUserIntel((prev) => {
			return { ...prev, [identifier]: event.target.value };
		});

		setIsLostFocus((prev) => {
			return { ...prev, [identifier]: false };
		});
	}

	function handleLostFocus(identifier) {
		setIsLostFocus((prev) => {
			return { ...prev, [identifier]: true };
		});
	}

	return (
		<form onSubmit={handleForm}>
			<h2>Login</h2>

			<div className="control-row">
				<Input
					label="Email"
					id="email"
					type="email"
					name="email"
					onChange={(e) => handleUserIntel("email", e)}
					onBlur={() => handleLostFocus("email")}
					value={userIntel.email}
					error={isInvalidEmail && "Please enter a valid email"}
				/>
				<Input
					label="Password"
					id="password"
					type="password"
					name="password"
					onChange={(e) => handleUserIntel("password", e)}
					onBlur={() => handleLostFocus("password")}
					value={userIntel.password}
					error={
						isInvalidPassowrd &&
						`Password must be at least 6 char. Rn ${userIntel.password.trim().length}`
					}
				/>
			</div>

			<p className="form-actions">
				<button type="reset" className="button button-flat">
					Reset
				</button>
				<button className="button">Login</button>
			</p>
		</form>
	);
}
