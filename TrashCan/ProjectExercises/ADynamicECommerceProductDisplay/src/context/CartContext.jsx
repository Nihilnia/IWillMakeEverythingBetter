import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  handleCartOps: (op, prd) => {},
});

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  console.log("cartItems");
  console.log(cartItems);

  function handleCartOps(op, prd) {
    setCartItems((prev) => {
      let updatedCartItems = [...prev];

      let itemIndex = updatedCartItems.findIndex((item) => item.id === prd.id);

      switch (op) {
        case "ADD_PRODUCT":
          //Checkin' if item already in cart, if so +1
          if (itemIndex !== -1) {
            updatedCartItems = updatedCartItems.map((item) => {
              return item.id === prd.id
                ? { ...item, howMany: item.howMany + 1 }
                : item;
            });
          } else {
            //If not create and push new item
            updatedCartItems.push({ ...prd, howMany: 1 });
          }

          break;

        case "REMOVE_PRODUCT":
          //Checking if item' s howMany prop is 1 or not, if 1 then remove
          let theItem = updatedCartItems[itemIndex];
          if (theItem.howMany > 1) {
            updatedCartItems = updatedCartItems.map((item) => {
              return item.id === prd.id
                ? { ...item, howMany: item.howMany - 1 }
                : item;
            });
          } else {
            updatedCartItems = updatedCartItems.filter(
              (item) => item.id !== prd.id
            );
          }
          break;

        default:
          break;
      }

      return updatedCartItems;
    });
  }

  const ctxValues = {
    cartItems: cartItems,
    handleCartOps: handleCartOps,
  };

  return (
    <CartContext.Provider value={ctxValues}>{children}</CartContext.Provider>
  );
}
