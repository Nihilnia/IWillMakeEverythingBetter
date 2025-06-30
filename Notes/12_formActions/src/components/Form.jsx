export default function Form() {
  return (
    <section className="form">
      <form>
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
          <select id="phase" name="phase">
            <option value="" selected disabled>
              Plase select..
            </option>
            <option value="nightTime">Night time</option>
            <option value="daylight">Daylight</option>
          </select>
        </div>
        <div>
          <label for="termsCons">Terms and conditions</label>{" "}
          <input type="checkbox" id="termsCons" name="termsCons" value="termsCons" />
        </div>
      </form>
    </section>
  );
}
