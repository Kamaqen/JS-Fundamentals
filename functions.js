// bind
function sayHello() {
  console.log(`Hello, ${this.name1} and ${this.name2}`);
}
const jhoan = { name: "Jhoan" };
const yull = { name: "Yull" };
const names = {
  name1: "probino",
  name2: "testino",
};
const sayHi = sayHello.bind(names);
console.log(typeof sayHi);
sayHi();