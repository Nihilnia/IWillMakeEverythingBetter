export default function Utilities({ onHandleNewColors }) {
  function handleNewColors() {
    const newColors = ["blue", "yellow", "orange"];
    onHandleNewColors(newColors);
  }

  return (
    <section className="absolute bottom-0 right-0">
      <div onClick={handleNewColors}>Change background</div>
    </section>
  );
}
