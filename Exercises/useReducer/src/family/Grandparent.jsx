import { useRef, useReducer } from "react";

import Parent from "./Parent";

function userRegistrationReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "USERNAME":
      return { ...state, userName: payload };
    case "PASSWORD":
      return { ...state, password: payload };
    case "RESET":
      return { userName: "", password: "" };
    default:
      return state;
  }
}

export default function Grandparent() {
  const [newUser, dispatch] = useReducer(userRegistrationReducer, {
    userName: "",
    password: "",
  });

  const refUsername = useRef(null);
  const refPassword = useRef(null);

  function handleNewUser(e) {
    e.preventDefault();

    dispatch({ type: "USERNAME", payload: refUsername.current.value });
    dispatch({ type: "PASSWORD", payload: refPassword.current.value });
  }

  return (
    <div>
      <section>
        <form
          onSubmit={handleNewUser}
          className="flex flex-col gap-y-[20px] items-end"
        >
          <div>
            <label>Username:</label>
            <input
              type="text"
              ref={refUsername}
              className="bg-[#fff] rounded-md text-red-600"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              ref={refPassword}
              className="bg-[#fff] rounded-md text-red-600"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-amber-400 text-[#000] px-2 py-1 rounded-md hover:bg-amber-200 hover:text-[#221d1d]"
            >
              Register
            </button>
          </div>
        </form>
      </section>
      {newUser.userName && newUser.password && <Parent userData={newUser} />}
    </div>
  );
}
