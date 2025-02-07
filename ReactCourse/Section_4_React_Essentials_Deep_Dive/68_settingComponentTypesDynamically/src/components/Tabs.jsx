export default function Tabs({ children, tabButtons, ButtonsContainer }) {
  return (
    <>
      <ButtonsContainer>{tabButtons}</ButtonsContainer>
      {children}
    </>
  );
}
