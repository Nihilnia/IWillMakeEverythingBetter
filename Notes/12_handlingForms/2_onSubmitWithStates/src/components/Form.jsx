import { useRef, useState } from "react";

export default function Form() {
  const [errors, setErrors] = useState([]);
  //just created a state for errors for both check if theres error and update the UI with it

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const username = useRef("");
  const password = useRef("");
  const phase = useRef("");
  const termsCons = useRef("");

  console.log("username");
  console.log(username);

  function handleForm(e) {
    e.preventDefault();

    setErrors([]); //Resetting state at every submit because we are always checking them

    const enteredUsername = username.current.value;
    const enteredPassword = password.current.value;
    const selectedPhase = phase.current.value;
    const isTermsCons = termsCons.current.checked;

    if (enteredUsername.length < 3) {
      setErrors((prev) => {
        return [...prev, "Username must be at least 3 char"];
      });
    }

    if (enteredPassword.length < 6) {
      setErrors((prev) => {
        return [...prev, "Password must be at least 6 char"];
      });
    }

    if (selectedPhase === "") {
      setErrors((prev) => {
        return [...prev, "Please select a phase"];
      });
    }

    if (!isTermsCons) {
      setErrors((prev) => {
        return [...prev, "Terms and conditions must be accepted"];
      });
    }

    //If conditions are okay it' s ready to send to back- end
    if (
      enteredUsername.length >= 3 &&
      enteredPassword.length >= 6 &&
      selectedPhase !== "" &&
      isTermsCons
    ) {
      const newUser = {
        username: enteredUsername,
        password: enteredPassword,
        phase: selectedPhase,
      };

      console.log(newUser);
      setIsFormSubmitted(true);

      e.target.reset();
    }
  }

  console.log(errors);

  return (
    <section className="form">
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="username">Username:</label>
          <input ref={username} type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input ref={password} type="password" id="password" name="password" />
        </div>
        <div>
          <label htmlFor="phase">Phase:</label>
          <select ref={phase} id="phase" name="phase" defaultValue="">
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
            ref={termsCons}
            type="checkbox"
            id="termsCons"
            name="termsCons"
            value="termsCons"
          />
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
