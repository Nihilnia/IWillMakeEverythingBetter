import { useRef, useState } from "react";
import UserList from "./UserList";

export default function UserForm() {
  const [users, setUsers] = useState([]);

  const refUsername = useRef("");
  const refPassword = useRef("");

  function handleSubmit(e) {
    e.preventDefault();

    const username = refUsername.current.value;
    const password = refPassword.current.value;

    setUsers((prev) => {
      return [...prev, { id: Math.random(), username: username, password: password }];
    });
  }

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" ref={refUsername} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" ref={refPassword} />
          </div>
          <div>
            <button type="submit">Add User</button>
          </div>
        </form>
      </section>

      <UserList allUsers={users} />
    </>
  );
}
