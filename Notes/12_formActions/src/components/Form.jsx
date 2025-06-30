export default function Form() {
  function handleForm(formData) {
    console.log("Form submitted");
    const username = formData.get("username");
    const password = formData.get("password");
    const phase = formData.get("phase");
    const termsCons = formData.get("termsCons");

    console.log(formData);
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
          <input type="checkbox" id="termsCons" name="termsCons" value="termsCons" />
        </div>
        <div>
          <button type="reset">Reset</button>
          <button type="submit">Enter</button>
        </div>
      </form>
    </section>
  );
}
