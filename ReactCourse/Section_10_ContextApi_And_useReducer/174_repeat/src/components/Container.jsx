import { useContext } from "react";
import { ExampleContext } from "../store/ExampleContext";

export default function Container({ children }) {
  const { theme } = useContext(ExampleContext);

  return <div className={theme}>{children}</div>;
}
