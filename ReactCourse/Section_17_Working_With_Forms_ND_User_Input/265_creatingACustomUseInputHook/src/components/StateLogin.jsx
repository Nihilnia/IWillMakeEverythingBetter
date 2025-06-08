import Input from "./Input";

import { isEmail, hasMinLength, isNotEmpty } from "../util/validation.js";
import useInput from "../hooks/useInput.js";

export default function Login() {
	const {
		value: emailValue,
		handleUserIntel: handleEmailChange,
		handleLostFocus: handleLostFocusEmail,
		hasError: isEmailInvalid,
	} = useInput("", (value) => {
		return isEmail(value) && isNotEmpty(value);
	});

	const {
		value: passwordValue,
		handleUserIntel: handlePasswordChange,
		handleLostFocus: handleLostFocusPassword,
		hasError: isPasswordInvalid,
	} = useInput("", (value) => {
		return hasMinLength(value, 6);
	});

	function handleForm(e) {
		e.preventDefault();

		if (!isEmailInvalid || !isPasswordInvalid) {
			return;
		}

		console.log("Email", emailValue);
		console.log("Password", passwordValue);
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
					onChange={handleEmailChange}
					onBlur={handleLostFocusEmail}
					value={emailValue}
					error={isEmailInvalid && "Please enter a valid email"}
				/>
				<Input
					label="Password"
					id="password"
					type="password"
					name="password"
					onChange={handlePasswordChange}
					onBlur={handleLostFocusPassword}
					value={passwordValue}
					error={
						isPasswordInvalid &&
						`Password must be at least 6 char. Rn ${passwordValue.trim().length}`
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
