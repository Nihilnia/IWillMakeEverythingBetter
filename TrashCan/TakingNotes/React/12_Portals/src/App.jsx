import { useState } from "react";
import Modal from "./components/Modal";

export default function App() {
  const [isModal, setIsModal] = useState(false);

  function handleToggleModal() {
    setIsModal(!isModal);
  }

  return (
    <section>
      <button onClick={handleToggleModal} className="bg-[red]">
        {isModal ? "Close" : "Show"} Modal
      </button>
      {isModal && <Modal />}
    </section>
  );
}
