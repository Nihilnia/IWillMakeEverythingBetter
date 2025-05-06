import { useReducer } from "react";
import { createContext } from "react";

export const AuthContext = createContext({
	allUsers: [],
	addUser: () => {},
	controlLogin: () => {},
});

function allUsersReducer(state, action) {
	const { type, payload } = action;

	switch (type) {
		case "NEW_USER": {
			const { username, password } = payload;

			return [
				...state,
				{
					id: Math.random(),
					username: username,
					password: password,
				},
			];
		}
	}
}

export default function AuthContextProvider({ children }) {
	const [allUsers, dispatch] = useReducer(allUsersReducer, []);

	function addUser(userCreds) {
		dispatch({
			type: "NEW_USER",
			payload: {
				username: userCreds.username,
				password: userCreds.password,
			},
		});
	}

	function controlLogin(userCreds) {
		const { username, password } = userCreds;

		const result = allUsers.filter((user) => user.username === username);

		if (result) {
			if (result.password === password) return true;
		}
		return false;
	}

	const ctxValues = {
		allUsers: allUsers,
		addUser: addUser,
		controlLogin: controlLogin,
	};

	return (
		<AuthContext.Provider value={ctxValues}>{children}</AuthContext.Provider>
	);
}
