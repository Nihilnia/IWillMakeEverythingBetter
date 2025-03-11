export default function DeleteConfirmation({ onConfirm, onCancel, isSame }) {
  return (
    <div id="delete-confirmation">
      <h2>{isSame ? "This place is already added." : "Are you sure?"}</h2>
      <p>
        {isSame
          ? "You cannot add the same place."
          : "Do you really want to remove this place?"}
      </p>
      {!isSame && (
        <div id="confirmation-actions">
          <button onClick={onCancel} className="button-text">
            No
          </button>
          <button onClick={onConfirm} className="button">
            Yes
          </button>
        </div>
      )}
    </div>
  );
}
