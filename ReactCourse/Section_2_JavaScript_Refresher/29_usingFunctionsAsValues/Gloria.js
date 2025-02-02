// function childFunction(arg) {
//   console.log("Hello " + arg);
// }

// function motherFunction(func, a) {
//   func(a);
// }

// motherFunction(childFunction, "aaa");

setTimeout(() => {
  console.log("Timed out");
}, 2000);

let handleTimeOut = () => {
  console.log("Time is ova.");
};

setTimeout(handleTimeOut, 3000);

function greeter(func) {
  if (func() === "Gloria") console.log("Welcome");
  else console.log("Who are you?");
}

//?With function keyword
greeter(function () {
  return "Gloria";
});

//?With arrow function
greeter(() => "Nihil");
