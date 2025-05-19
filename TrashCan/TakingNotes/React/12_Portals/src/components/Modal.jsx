import { createPortal } from "react-dom";

export default function Modal() {
  return createPortal(
    <dialog open>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <button>Okay</button>
    </dialog>,
    document.getElementById("modal")
  );
}
