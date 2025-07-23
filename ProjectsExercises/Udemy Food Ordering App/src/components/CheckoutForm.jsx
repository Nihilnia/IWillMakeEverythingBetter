import { useContext, useRef } from "react";
import { FoodContext } from "../context/FoodContext";
import { useActionState } from "react";
import { DialogContext } from "../context/DialogContext";
import Dialog from "./UI/Dialog";

export default function CheckoutForm() {
  const { cartTotalPrice } = useContext(FoodContext);
  const { handleShowDialog, clearActiveDialog } = useContext(DialogContext);

  const refDialog = useRef(null);

  function handleCloseCheckout() {
    clearActiveDialog();
  }

  function handleForm(prevFormState, formData) {
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const street = formData.get("street");
    const postalCode = formData.get("postalCode");
    const city = formData.get("city");

    const errors = [];

    if (fullName.length < 3) {
      errors.push("Name must contain at least three characters.");
    }
    if (!email.includes("@")) {
      errors.push("Please enter a valid e-mail.");
    }

    if (street.length < 5) {
      errors.push("Street must contain at least five characters.");
    }
    if (postalCode.length < 5) {
      errors.push("Postal code must contain at least five characters.");
    }
    if (city.length < 3) {
      errors.push("City must contain at least three characters.");
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          fullName,
          email,
          street,
          postalCode,
          city,
        },
      };
    }

    //Send to api and show dialog
    handleShowDialog(refDialog);
    return { errors: null };
  }

  const [formState, formAction, pending] = useActionState(handleForm, { errors: null });

  return (
    <section>
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total amount: ${cartTotalPrice}</p>
        <div className="control">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" name="fullName" defaultValue={formState?.enteredValues?.fullName} />
        </div>
        <div className="control">
          <label htmlFor="email">E-mail Address:</label>
          <input type="email" name="email" defaultValue={formState?.enteredValues?.email} />
        </div>
        <div className="control">
          <label htmlFor="street">Street:</label>
          <input type="text" name="street" defaultValue={formState?.enteredValues?.street} />
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="postalCode">Postal Code:</label>
            <input
              type="text"
              name="postalCode"
              defaultValue={formState?.enteredValues?.postalCode}
            />
          </div>
          <div className="control">
            <label htmlFor="city">City:</label>
            <input type="text" name="city" defaultValue={formState?.enteredValues?.city} />
          </div>
        </div>
        <div className="modal-actions">
          <button type="button" className="text-button" onClick={handleCloseCheckout}>
            Close
          </button>
          <button type="submit" className="button">
            Submit Order
          </button>
        </div>
      </form>

      {formState.errors && (
        <div className="error">
          {formState.errors.map((err) => {
            return <p key={err}>{err}</p>;
          })}
        </div>
      )}

      <Dialog ref={refDialog}>
        <h2>Thank you for your order!</h2>
        <p>We will reacy you soon!</p>
      </Dialog>
    </section>
  );
}
