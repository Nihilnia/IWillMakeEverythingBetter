import { useActionState, useContext } from "react";
import submitOpinion from "../util/submitOpinion";
import { OpinionsContext } from "../store/opinions-context";

export function NewOpinion() {
  const { addOpinion } = useContext(OpinionsContext);

  const [formState, formAction, pending] = useActionState(submitOpinion, { errors: null });

  if (formState.isFormSent) {
    const { username, title, body } = formState.enteredValues;

    const newOpinion = {
      id: Math.random(),
      userName: username,
      title: title,
      body: body,
      votes: 0,
    };

    addOpinion(newOpinion);
  }

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.enteredValues?.username}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.enteredValues?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.enteredValues?.body} />
        </p>

        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((err) => {
              return <li key={err}>{err}</li>;
            })}
          </ul>
        )}

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
