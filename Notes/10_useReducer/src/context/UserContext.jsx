import { createContext, useReducer, useState } from "react";

export const UserContext = createContext({
  allUsers: [],
  addUser: () => {},
  removeUser: () => {},
});

function UserReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_USER": {
      const { user } = payload;
      const { username, password } = user;
      return [...state, { id: Math.random(), username, password }];
    }

    case "REMOVE_USER": {
      const { userID } = payload;

      return state.filter((user) => user.id !== userID);
    }

    default: {
      return state; // Always return current state for unknown actions
    }
  }
}

export default function UserContextProvider({ children }) {
  const [users, dispatch] = useReducer(UserReducer, []);

  function handleAddUser(user) {
    dispatch({
      type: "ADD_USER",
      payload: {
        user,
      },
    });
  }

  function handleRemoveUser(userID) {
    dispatch({
      type: "REMOVE_USER",
      payload: {
        userID,
      },
    });
  }

  const ctxValues = {
    allUsers: users,
    addUser: handleAddUser,
    removeUser: handleRemoveUser,
  };

  return <UserContext.Provider value={ctxValues}>{children}</UserContext.Provider>;
}
