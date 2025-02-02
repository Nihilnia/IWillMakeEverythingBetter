//This is beautiful
const hobbies = ["reading", "cooking", "driving"];
const newHobbies = ["walking", "hacking"];

let mergedHobbies = [...hobbies, ...newHobbies];

mergedHobbies.forEach((f, y) => console.log(y, f));

//?Also you can use it for objects

const user = {
  name: "Nihil",
  pass: 123,
};

const extendedUser = {
  ...user,
  isAdmin: true,
};

console.log(extendedUser);
