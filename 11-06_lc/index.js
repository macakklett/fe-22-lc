// function getSenseOfLite() {
//   return 42;
// }

// function getSenseOfLife() {
//   console.log(42);
// }

// getSenseOfLite();

// const res = getSenseOfLife();
// console.log(res);
// console.log(getSenseOfLife());
// ----------------------------------------------------------------------

// function getSquared(n) {
//   return n * n;
// }

// // testing
// console.log(getSquared(5));
// console.log(getSquared(-4));
// console.log(getSquared(0));

// -------------------------------------------------------------------------

// function printMsg(num) {
//   console.log('I am ' + num + ' years old');
// }

// // testind
// console.log(printMsg(10));
// console.log(printMsg(-10));
// console.log(printMsg('10'));

// function getMsg(num) {
//   return `I am ${num} years old`;
// }

// function getMsg(age) {
//   if (age < 18) {
//     return null;
//   }
//   return `I am ${age} years old`;
// }

const mult = (a, b) => a * b;
const sum = (a, b) => a + b;
const diff = (a, b) => a - b;

// console.log(mult(14, 10));
// console.log(mult(-42, 3));
// console.log(mult('28', 2));

// const square = num => num ** 2;

// console.log(square(14, 10));
// console.log(square(-42, 3));
// console.log(square('28', 2));

// const getMagicNumber = () => 17;

// console.log(getMagicNumber());
// console.log(getMagicNumber('hello'));

const mathFunc = (num1, num2) => {
  return sum(num1, num2) + mult(num1, num2) + diff(num1, num2);
};

// console.log(getMagicNumber());
console.log(mathFunc(5, 10));
