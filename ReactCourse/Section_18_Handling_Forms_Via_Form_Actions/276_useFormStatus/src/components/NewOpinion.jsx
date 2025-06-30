import { useActionState, useContext } from "react";
import { OpinionsContext } from "../store/opinions-context";
import Submit from "./Submit";

function hasEnoughLength(length, value) {
  return value.length >= length;
}

export function NewOpinion() {
  const { addOpinion } = useContext(OpinionsContext);

  async function handleFormSubmit(prevFormState, formData) {
    const userName = formData.get("userName");
    const title = formData.get("title");
    const body = formData.get("body");

    const errors = [];

    if (!hasEnoughLength(3, userName)) {
      errors.push("Username must be at least 3 char.");
    }
    if (!hasEnoughLength(6, title)) {
      errors.push("title must be at least 6 char.");
    }
    if (!hasEnoughLength(9, body)) {
      errors.push("body must be at least 9 char.");
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          userName,
          title,
          body,
        },
      };
    }

    //Sending data to backEnd
    await addOpinion({
      userName,
      title,
      body,
    });

    return {
      errors: null,
    };
  }

  const [formState, formAction, pending] = useActionState(handleFormSubmit, { errors: null });

  console.log(formState);

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
              defaultValue={formState.enteredValues?.userName}
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

        <Submit />
      </form>
    </div>
  );
}
