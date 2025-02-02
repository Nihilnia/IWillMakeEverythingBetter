let user = {
  name: "Gloria",
  age: 7,
  sayHello() {
    console.log(
      `Hello I' m ${this.name} and I have been around since ${this.age} years..`
    );
  },
};

console.log(user);
console.log(user.name);
console.log(user.age);
user.sayHello();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greetYourself() {
    console.log("hELLLOOOOO");
    console.log(this.name);
    console.log(this.age);
  }
}

const userOne = new User("Gloria", 7);
userOne.greetYourself();
