export default function Header({ imgLink, title }) {
  return (
    <header id="header">
      <img src={imgLink} alt={title} />
      <h1>{title}</h1>
    </header>
  );
}
