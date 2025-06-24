import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UserCard({ user }) {
  const { username, password } = user;
  const { removeUser } = useContext(UserContext);

  function handleRemove() {
    removeUser(user.id);
  }

  return (
    <div>
      <h2>Username: {username}</h2>
      <h2>Password: {password}</h2>
      <button onClick={handleRemove}>Remove User</button>
    </div>
  );
}
