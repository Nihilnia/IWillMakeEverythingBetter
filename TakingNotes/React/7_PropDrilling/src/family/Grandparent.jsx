import { useCallback, useRef, useState } from "react";
import Parent from "./Parent";

export default function Grandparent() {
  const [user, setUser] = useState({});

  const userName = useRef(null);
  const password = useRef(null);

  const handleNewUser = useCallback((e) => {
    e.preventDefault();
    setUser((prev) => {
      return {
        ...prev,
        userName: userName.current.value,
        password: password.current.value,
      };
    });
  }, []);

  console.log(user);
  console.log(Object.keys(user).length);

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
              ref={userName}
              className="bg-[#fff] rounded-md text-red-600"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              ref={password}
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
      {Object.keys(user).length > 0 && <Parent userData={user} />}
    </div>
  );
}
