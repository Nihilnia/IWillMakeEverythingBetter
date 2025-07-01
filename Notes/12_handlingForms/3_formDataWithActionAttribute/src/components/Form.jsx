import { useState } from "react";

export default function Form() {
  const [errors, setErrors] = useState([]);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function handleForm(formData) {
    //e.preventDefault(); is default on action

    setErrors([]); //Resetting state at every submit because we are always checking them

    const username = formData.get("username");
    const password = formData.get("password");
    const phase = formData.get("phase");
    const termsCons = formData.get("termsCons");

    const currentErrors = [];

    if (username.length < 3) {
      currentErrors.push("Username must be at least 3 char");
    }

    if (password.length < 6) {
      currentErrors.push("Password must be at least 6 char");
    }

    if (!phase) {
      currentErrors.push("Please select a phase");
    }

    if (!termsCons) {
      currentErrors.push("Terms and conditions must be accepted");
    }

    if (currentErrors.length > 0) {
      setErrors(currentErrors);
    } else {
      //form submitted without errors, ready to send to back- end
      setIsFormSubmitted(true);
    }
  }

  return (
    <section className="form">
      <form action={handleForm}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label htmlFor="phase">Phase:</label>
          <select id="phase" name="phase" defaultValue="">
            <option value="" disabled>
              Plase select..
            </option>
            <option value="nightTime">Night time</option>
            <option value="daylight">Daylight</option>
          </select>
        </div>
        <div>
          <label htmlFor="termsCons">Terms and conditions</label>
          <input type="checkbox" id="termsCons" name="termsCons" />
        </div>
        <div>
          <button type="reset">Reset</button>
          <button type="submit">Enter</button>
        </div>
      </form>
      {errors.length > 0 && (
        <ul className="errors">
          {errors.map((err) => {
            return <li key={err}>{err}</li>;
          })}
        </ul>
      )}
      {isFormSubmitted && (
        <ul>
          <li>Form submitted succesfully.</li>
        </ul>
      )}
    </section>
  );
}
