export default function Header({ theImg, children }) {
  return (
    <section id="header">
      <img src={theImg} alt="" />
      <h1>{children}</h1>
    </section>
  );
}
