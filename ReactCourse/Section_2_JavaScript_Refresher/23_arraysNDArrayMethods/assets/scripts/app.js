const hobbies = ["Sports", "Cooking", "Reading"];

//Methods
hobbies.push("WalkingLMAO");

//findIndex
let result = hobbies.findIndex((f) => f === "Cooking");

//longer way
let resultTwo = hobbies.findIndex((f) => {
  return f === "Cooking";
});
console.log(result);
console.log(resultTwo);

//Writing our own function then
let fIndex = (array, item) => array.findIndex((f) => f === item);
console.log(fIndex(hobbies, "Cooking"));

//map
const playlist = ["a", "b", "c"];

const transformedPlaylist = playlist.map((f) => f + "AAAAAAAABBBBCBCBCBCB");

transformedPlaylist.forEach((f) => {
  console.log(f);
});

const transformTOObject = playlist.map((f) => {
  return { naaame: f };
});

console.log(transformTOObject);

//Exercise
function transformToObjects(numberArray) {
  return numberArray.map((f) => {
    return { val: f };
  });
}

console.log(transformToObjects([1, 2, 3]));
