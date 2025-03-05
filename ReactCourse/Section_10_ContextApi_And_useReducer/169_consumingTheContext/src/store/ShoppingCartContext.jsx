import { createContext } from "react";

export const CartContext = createContext({
  items: ["a", "b", "c"],
});
