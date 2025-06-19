import { useContext, useRef } from "react";
import UserList from "./UserList";
import UserCard from "./UserCard";
import { UserContext } from "../context/UserContext";

export default function UserForm() {
  const { allUsers, addUser } = useContext(UserContext);

  const refUsername = useRef("");
  const refPassword = useRef("");

  function handleSubmit(e) {
    e.preventDefault();

    const username = refUsername.current.value;
    const password = refPassword.current.value;

    const newUser = { username, password };

    addUser(newUser);
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

      <UserList>
        {allUsers.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </UserList>
    </>
  );
}
