import { useContext } from "react";
import { use } from "react"; //Alternative and more flexible one, available /w React 19
import { CartContext } from "../store/ShoppingCartContext";

export default function Cart({ onUpdateItemQuantity }) {
  return (
    <CartContext.Consumer>
      {/* React 19 and higher doesnt need .Consumer prop */}
      {(cardCtx) => {
        const { items } = cardCtx;

        const totalPrice = items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
        return (
          <div id="cart">
            {items.length === 0 && <p>No items in cart!</p>}
            {items.length > 0 && (
              <ul id="cart-items">
                {items.map((item) => {
                  const formattedPrice = `$${item.price.toFixed(2)}`;

                  return (
                    <li key={item.id}>
                      <div>
                        <span>{item.name}</span>
                        <span> ({formattedPrice})</span>
                      </div>
                      <div className="cart-item-actions">
                        <button
                          onClick={() => onUpdateItemQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => onUpdateItemQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
            <p id="cart-total-price">
              Cart Total: <strong>{formattedTotalPrice}</strong>
            </p>
          </div>
        );
      }}
    </CartContext.Consumer>
  );
}
