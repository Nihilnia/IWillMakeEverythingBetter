import { useActionState } from "react";

export default function CheckoutForm() {
  function handleForm(prevFormState, formData) {
    const firstName = formData.get("firstName");
    const address = formData.get("address");

    const errors = [];

    if (firstName.length < 3) {
      errors.push("First name must contain at least 3 chars");
    }
    if (address.length < 10) {
      errors.push("Address must contain at least 10 chars");
    }

    if (errors.length > 0) {
      return {
        enteredValues: {
          firstName,
          address,
        },
        errors,
      };
    }

    return { errors: null };
  }

  const [formState, formAction, pending] = useActionState(handleForm, { errors: null });

  return (
    <form action={formAction} className="control">
      <div>
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          defaultValue={formState.enteredValues?.firstName}
        />
      </div>
      <div>
        <label htmlFor="address">First name:</label>
        <textarea
          name="address"
          id="address"
          defaultValue={formState.enteredValues?.address}
        ></textarea>
      </div>
      <div>
        <button className="button" type="button">
          Cancel
        </button>
        <button className="button" type="submit">
          Proceed
        </button>
      </div>
      {formState.errors && (
        <div className="error">
          <ul>
            {formState.errors.map((err) => {
              <li key={err}>{err}</li>;
            })}
          </ul>
        </div>
      )}
    </form>
  );
}
