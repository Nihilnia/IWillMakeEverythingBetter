import Cart from "./Cart";

export default function Header() {
  return (
    <section id="main-header">
      <div id="title">
        <h3>My Food App</h3>
        <img src="/logo.jpg" alt="My Food App" />
      </div>
      <div>
        <button type="button">
          <Cart />
        </button>
      </div>
    </section>
  );
}
