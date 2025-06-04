import { useState } from "react";
import Input from "./Input";

export default function Login() {
	const [userIntel, setUserIntel] = useState({
		email: "",
		password: "",
	});

	function handleForm(e) {
		e.preventDefault();

		console.log(userIntel);
	}

	function handleUserIntel(identifier, value) {
		setUserIntel((prev) => {
			return { ...prev, [identifier]: value };
		});
	}

	return (
		<form onSubmit={handleForm}>
			<h2>Login</h2>

			<div className="control-row">
				<div className="control no-margin">
					<Input
						label="E-MAIL"
						name="email"
						errorMsg="Please enter a valid email"
						onHandleUserIntel={handleUserIntel}
					/>
				</div>

				<div className="control no-margin">
					<Input
						label="PASS-WORD"
						name="password"
						errorMsg="Please enter a valid password"
						onHandleUserIntel={handleUserIntel}
					/>
				</div>
			</div>

			<p className="form-actions">
				<button type="reset" className="button button-flat">
					Reset
				</button>
				<button className="button" type="submit">
					Login
				</button>
			</p>
		</form>
	);
}
