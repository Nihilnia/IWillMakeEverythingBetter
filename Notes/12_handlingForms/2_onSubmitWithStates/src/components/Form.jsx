import { useState } from "react";

const initialFormState = {
  username: "",
  password: "",
  phase: "",
  termsCons: false,
};

export default function Form() {
  const [enteredValues, setEnteredValues] = useState(initialFormState);
  const [errors, setErrors] = useState([]);

  function handleInputChanges(e) {
    setEnteredValues((prev) => {
      if (e.target.name === "termsCons") {
        return { ...prev, [e.target.name]: !prev.termsCons };
      }
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function handleForm(e) {
    e.preventDefault();

    setErrors([]); //Resetting state at every submit because we are always checking them

    const { username, password, phase, termsCons } = enteredValues;

    const currentErrors = [];

    if (username.length < 3) {
      currentErrors.push("Username must be at least 3 char");
    }

    if (password.length < 6) {
      currentErrors.push("Password must be at least 6 char");
    }

    if (phase === "") {
      currentErrors.push("Please select a phase");
    }

    if (!termsCons) {
      currentErrors.push("Terms and conditions must be accepted");
    }

    if (currentErrors.length > 0) {
      setErrors(currentErrors);
    } else {
      setIsFormSubmitted(true);
      setEnteredValues(initialFormState);
    }
  }

  function handleResetForm() {
    setEnteredValues(initialFormState);
    setErrors([]);
    setIsFormSubmitted(false);
  }

  console.log(enteredValues);

  return (
    <section className="form">
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleInputChanges}
            value={enteredValues.username}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInputChanges}
            value={enteredValues.password}
          />
        </div>
        <div>
          <label htmlFor="phase">Phase:</label>
          <select id="phase" name="phase" onChange={handleInputChanges} value={enteredValues.phase}>
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
            value="termsCons"
            onChange={handleInputChanges}
            defaultChecked={enteredValues.termsCons}
          />
        </div>
        <div>
          <button type="reset" onClick={handleResetForm}>
            Reset
          </button>
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
