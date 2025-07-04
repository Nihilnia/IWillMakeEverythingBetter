import { useActionState } from "react";
import Submit from "./Submit";
import Review from "./Review";

export default function Form() {
  async function handleForm(prevFormState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");
    const phase = formData.get("phase");
    const termsCons = formData.get("termsCons");

    const currentErrors = [];

    if (username.length < 3) currentErrors.push("Username must be at least 3 char");
    if (password.length < 6) currentErrors.push("Password must be at least 6 char");
    if (phase === "") currentErrors.push("Please select a phase");
    if (!termsCons) currentErrors.push("Terms and conditions must be accepted");

    if (currentErrors.length > 0) {
      return {
        errors: currentErrors,
        enteredValues: {
          username,
          password,
          phase,
          termsCons,
        },
      };
    }

    return { errors: null, isSubmitted: true };
  }

  const [formState, formAction, pending] = useActionState(handleForm, { errors: null });

  return (
    <section className="form">
      <form action={formAction}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            defaultValue={formState.enteredValues?.username}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue={formState.enteredValues?.password}
          />
        </div>
        <div>
          <label htmlFor="phase">Phase:</label>
          <select id="phase" name="phase" defaultValue={formState.enteredValues?.phase}>
            <option value="" disabled>
              Plase select..
            </option>
            <option value="nightTime">Night time</option>
            <option value="daylight">Daylight</option>
          </select>
        </div>
        <div>
          <label htmlFor="termsCons">Terms and conditions</label>
          <input
            type="checkbox"
            id="termsCons"
            name="termsCons"
            defaultChecked={formState.enteredValues?.termsCons}
          />
        </div>
        <div>
          <button type="reset">Reset</button>
          <Submit />
        </div>
      </form>
      {formState.errors && (
        <ul className="errors">
          {formState.errors.map((err) => {
            return <li key={err}>{err}</li>;
          })}
        </ul>
      )}
      {formState.isSubmitted && (
        <ul>
          <li>Form submitted succesfully.</li>
        </ul>
      )}
      <Review />
    </section>
  );
}
