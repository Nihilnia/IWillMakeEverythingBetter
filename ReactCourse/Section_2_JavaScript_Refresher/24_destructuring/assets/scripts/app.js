const userData = ["Nihil", "Nia"];

const name = userData[0];
const lastName = userData[1];

//?Instead of this

const [nam, lastNam] = userData;
console.log(nam);
console.log(lastNam);

//####################

const user = {
  aiName: "Gloria",
  aiType: "AI",
};

const gName = user.name;
const gType = user.type;

//Instead of this

const { aiName, aiType } = user;
console.log(aiName);
console.log(aiType);

//variable names must be same with property name
//?or you can use alias

const { aiName: gNam, aiType: gTyp } = user;
console.log(gNam);
console.log(gTyp);

//Destructuring in Function Parameter Lists
function storeToLS(arg) {
  localStorage.setItem("id", arg.id);
  localStorage.setItem("value", arg.value);
}

//?Instead of this

function storeToLSTwo({ id, value }) {
  localStorage.setItem("id", id);
  localStorage.setItem("value", value);
}

storeToLSTwo({ id: 444, value: "abc" });
