import { useRef, useState } from "react";
import Parent from "./Parent";

export default function GrandparentTwo() {
  const [newUser, setNewUser] = useState({
    userName: "",
    password: "",
  });

  const refUsername = useRef(null);
  const refPassword = useRef(null);

  function handleNewUser(e) {
    e.preventDefault();

    setNewUser(() => {
      return {
        userName: refUsername.current.value,
        password: refPassword.current.value,
      };
    });
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
