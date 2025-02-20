import { styled } from "styled-components";

const TheButton = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;

  &:hover {
    background-color: #f0920e;
  }
`;

// export default function Button({ children, onClick }) {
//   return <TheButton onClick={onClick}>{children}</TheButton>;
// }

export default TheButton;

//! So as I understand I dont even need to create a component with a function.
// I can simply export
// export default TheButton;

// and I can use it like as its in-built html button (it is actually)
// because styled components creating a button (in-built)
