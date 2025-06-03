import { useRef } from "react";

export default function Login() {
	const refEmail = useRef("");
	const refPassword = useRef("");

	function handleForm(e) {
		e.preventDefault();

		const user = {
			email: refEmail.current.value,
			password: refPassword.current.value,
		};

		console.log(user);
	}

	return (
		<form onSubmit={handleForm}>
			<h2>Login</h2>

			<div className="control-row">
				<div className="control no-margin">
					<label htmlFor="email">Email</label>
					<input id="email" type="email" name="email" ref={refEmail} />
				</div>

				<div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						ref={refPassword}
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
