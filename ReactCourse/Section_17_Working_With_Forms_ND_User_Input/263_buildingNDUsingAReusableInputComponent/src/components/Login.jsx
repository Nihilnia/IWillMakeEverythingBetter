import { useState } from "react";
import { useRef } from "react";

export default function Login() {
	const [isFormInvalid, setIsFormInvalid] = useState({
		email: false,
		password: false,
	});

	const refEmail = useRef("");
	const refPassword = useRef("");

	function handleForm(e) {
		e.preventDefault();

		const user = {
			email: refEmail.current.value,
			password: refPassword.current.value,
		};

		setIsFormInvalid((prev) => {
			let result = { ...prev };

			if (!user.email.includes("@")) {
				result = { ...result, email: true };
			} else {
				result = { ...result, email: false };
			}

			if (user.password === "") {
				result = { ...result, password: true };
			} else {
				result = { ...result, password: false };
			}

			return result;
		});
	}

	return (
		<form onSubmit={handleForm} noValidate>
			<h2>Login</h2>

			<div className="control-row">
				<div className="control no-margin">
					<label htmlFor="email">Email</label>
					<input id="email" type="email" name="email" ref={refEmail} />
					{isFormInvalid.email && (
						<div className="control-error">
							<p>Please enter a valid email</p>
						</div>
					)}
				</div>

				<div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						ref={refPassword}
					/>
					{isFormInvalid.password && (
						<div className="control-error">
							<p>Password cannot be empty</p>
						</div>
					)}
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
