export default function Navbar({ howMany, onToggleCart }) {
  return (
    <section className="bg-[#fff] text-[#000] ">
      <div className="max-w-[70%] m-auto flex justify-between">
        <div className="text-lg">Home</div>
        <div className="text-lg cursor-pointer" onClick={onToggleCart}>
          Cart ({howMany})
        </div>
      </div>
    </section>
  );
}
