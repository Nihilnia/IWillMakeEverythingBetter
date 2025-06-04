import { useState } from "react";

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
				<div className="control no-margin">
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="email"
						name="email"
						onChange={(e) => handleUserIntel("email", e)}
						onBlur={() => handleLostFocus("email")}
						value={userIntel.email}
					/>
					{isInvalidEmail && (
						<div className="control-error">
							<p>Please anter a valid e-mail</p>
						</div>
					)}
				</div>

				<div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						onChange={(e) => handleUserIntel("password", e)}
						onBlur={() => handleLostFocus("password")}
						value={userIntel.password}
					/>
				</div>
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
