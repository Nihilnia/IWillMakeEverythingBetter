export default function Tabs({
  children,
  tabButtons,
  ButtonsContainer = "menu", //settin' up a default value, basically a fallback
}) {
  return (
    <>
      <ButtonsContainer>{tabButtons}</ButtonsContainer>
      {children}
    </>
  );
}
