import Cart from "./Cart";

export default function Navbar({ onSetIsCartOpen }) {
  return (
    <nav>
      <div>My Polish Kitchen</div>
      <div>
        <Cart onSetIsCartOpen={onSetIsCartOpen} />
      </div>
    </nav>
  );
}
