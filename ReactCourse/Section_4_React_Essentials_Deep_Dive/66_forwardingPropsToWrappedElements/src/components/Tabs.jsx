export default function Tabs({ children, tabButtons }) {
  return (
    <>
      <menu>{tabButtons}</menu>
      {children}
    </>
  );
}
