export function isLongEnough(minLength, value) {
  if (value.length >= minLength) {
    return true;
  }

  return false;
}
