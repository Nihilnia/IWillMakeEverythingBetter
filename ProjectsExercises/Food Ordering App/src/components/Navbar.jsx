import Cart from "./Cart";

export default function Navbar({ onSetIsCartOpen }) {
  return (
    <nav className="flex flex-row justify-between max-w-[90%] m-auto mb-4 mt-4">
      <div>My Polish Kitchen</div>
      <div>
        <Cart onSetIsCartOpen={onSetIsCartOpen} />
      </div>
    </nav>
  );
}
