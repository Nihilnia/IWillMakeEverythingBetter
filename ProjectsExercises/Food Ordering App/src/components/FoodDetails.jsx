import { useEffect, useRef } from "react";

export default function FoodDetails({ onHandleToggle, food }) {
  const { name, description, image, details } = food;
  const { ingredients, preparationTime, dietary, history } = details;

  const refDialog = useRef(null);

  useEffect(() => {
    if (refDialog.current) {
      refDialog.current.showModal();
    }

    return () => {
      if (refDialog.current) {
        refDialog.current.close();
      }
    };
  }, []);

  function handleClose() {
    onHandleToggle();
    refDialog.current.close();
  }

  return (
    <dialog
      ref={refDialog}
      onClose={handleClose}
      className="fixed inset-0 m-auto h-fit max-w-[50%] rounded-lg p-4"
    >
      <div>
        <h1 className="section-title text-2xl text-center">{name.toUpperCase()}</h1>
        <div className="flex flex-1/2 gap-4">
          <img src={image} alt="" className="max-w-[50%] rounded-lg" />
          <div className="flex flex-col gap-2">
            <div>
              <h2 className="card-title">Ingredients:</h2>
              <p className="body-text">{ingredients}</p>
            </div>
            <div>
              <h2 className="card-title">Preparation time</h2>
              <p className="body-text">{preparationTime}</p>
            </div>
            <div>
              <p className="card-title">Dietary:</p>
              <p className="body-text">{dietary}</p>
            </div>
            <div>
              <h2 className="card-title">History:</h2>
              <p className="body-text">{history}</p>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
