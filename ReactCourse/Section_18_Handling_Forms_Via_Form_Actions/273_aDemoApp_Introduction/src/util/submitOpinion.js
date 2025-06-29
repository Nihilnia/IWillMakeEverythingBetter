import { isLongEnough } from "./validations";

export default function submitOpinion(prevFormData, formData) {
  const username = formData.get("userName");
  const title = formData.get("title");
  const body = formData.get("body");

  const errors = [];

  if (!isLongEnough(3, username)) {
    errors.push("Username must be at least 3 char");
  }

  if (!isLongEnough(6, title)) {
    errors.push("Title must be at least 6 char");
  }

  if (!isLongEnough(20, body)) {
    errors.push("Opinion must be at least 20 char");
  }

  if (errors.length > 0) {
    return {
      errors: errors,
      enteredValues: {
        username,
        title,
        body,
      },
    };
  }

  return {
    errors: null,
    isFormSent: true,
    enteredValues: {
      username,
      title,
      body,
    },
  };
}
