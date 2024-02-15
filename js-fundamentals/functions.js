// bind
// function sayHello() {
//   console.log(`Hello, ${this.name1} and ${this.name2}`);
// }
// const jhoan = { name: "Jhoan" };
// const yull = { name: "Yull" };
// const names = {
//   name1: "probino",
//   name2: "testino",
// };
// const sayHi = sayHello.bind(names);
// console.log(typeof sayHi);
// sayHi();

// function greetCurried(greeting) {
//   return function (name) {
//     return `${greeting}, ${name}`;
//   };
// }
// const greetingsArray = ["Hello", "Hola", "Ciao", "Aloha", ""]
// const greet = greetCurried("Welcome");
// greet("Testino");
// greet("Probino");
// greet("Fapencio");

const person = {
  name: "Testino",
  lastName: "DiPrueba"
};
function sayHello(completeName) {
  if (completeName) {
    console.log(`Hello, my name is ${this.name} ${this.lastName}`);
  } else {
    console.log(`Hello, my name is ${this.name}`);
  }
  
}
// const sayHelloPerson = sayHello.bind(person);
// // sayHelloPerson();
// sayHello.call(person, true);
// sayHello.apply(person, [false]);

// HI ORDER FUNCTIONS -- HOF

function run () {
  console.log("I am running!!");
}

function walk() {
  console.log("Re...! ...Spect! Walk!");
}

function hof(fn1, fn2, person) {
  console.log("Execute the code.");
  fn1();
  console.log("This comes after executing the function.");
  fn2();
  console.log(person.name);
}
hof(run, walk);

const pattern = /^(?=.*[a-zA-Z]).{26,}$/;
const text = "Your input string here";

if (pattern.test(text)) {
    console.log("String contains all alphabet letters at least once.");
} else {
    console.log("String does not contain all alphabet letters at least once.");
}


