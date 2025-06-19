import { createContext, useState } from "react";

export const UserContext = createContext({
  allUsers: [],
  addUser: () => {},
});

export default function UserContextProvider({ children }) {
  const [users, setUsers] = useState([]);

  function handleAddUser(user) {
    setUsers((prev) => {
      const { username, password } = user;
      return [...prev, { id: Math.random(), username, password }];
    });
  }

  const ctxValues = {
    allUsers: users,
    addUser: handleAddUser,
  };

  return <UserContext.Provider value={ctxValues}>{children}</UserContext.Provider>;
}
