export default function Section({ children, sectionID, title }) {
  return (
    <section id={sectionID}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
