import { isEmail, isNotEmpty, hasMinLength, isEqualToOtherValue } from "./validation.js";

export function submitAction(prevFormState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirm-password");
  const firstName = formData.get("first-name");
  const lastName = formData.get("last-name");
  const role = formData.get("role");
  const terms = formData.get("terms");
  const acquisition = formData.getAll("acquisition");

  const errors = [];

  if (!isEmail(email)) {
    errors.push("Invalid email");
  }

  if (!isNotEmpty(password) || !hasMinLength(password, 6)) {
    errors.push("You must provide a password with at least 6 characters.");
  }

  if (!isEqualToOtherValue(password, confirmPassword)) {
    errors.push("Passwords do not match.");
  }

  if (!isNotEmpty(firstName) || !isNotEmpty(lastName)) {
    errors.push("Please provide both of your first name and last name");
  }

  if (!isNotEmpty(role)) {
    errors.push("Please select a role");
  }

  if (!terms) {
    errors.push("Please accept terms");
  }

  if (!acquisition.length > 0) {
    errors.push("Please select at least one acqusiton channel");
  }

  if (errors.length > 0) {
    return {
      errors,
      enteredValues: {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        role,
        terms,
        acquisition,
      },
    };
  }

  return { errors: null };
}
