// example 1
// const numberList1 = [1, 2, 3, 4, 5];
// console.log('arr before pop', numberList1);
// method pop
// input: none
// output: number
// const res = numberList1.pop();
// console.log(res);
// console.log('arr after pop', numberList1);

// example 2
// const numberList1 = [1, 2, 3, 4, 5];
// console.log('arr before push', numberList1);
// method push
// input: element1(any type) ... elementN
// output: new array length (number)
// const res = numberList1.push(5, 4343, 'hello');
// console.log(res);
// console.log('arr after push', numberList1);

// example 3
// const numberList1 = [1, 2, 3, 4, 5];
// console.log('arr before shift', numberList1);
// method shift
// input: none
// output: element | undefined
// const res = numberList1.shift();
// console.log(res);
// console.log('arr after shift', numberList1);

// filter example

const anotherNumberList = [5, 0, 8, 10, -4, 50, 220];

// input: cb
// output: arr filtered

// callback
// input: element, index(optional), array(optional)
// output : boolean

// option 1

// console.log('arr before filter', anotherNumberList);
// const res4 = anotherNumberList.filter(filterCallback);

// function filterCallback(element) {
//   if(element > 5) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log('arr after filter', anotherNumberList);
// console.log(res4);

// option 2

console.log('arr before filter', anotherNumberList);

// const res4 = anotherNumberList.filter(function(element) {
//   return element > 5;
// });

// function filterCallback(element) {
//   return element > 5;
// }

// option 3
const res4 = anotherNumberList.filter(el => el > 5);

console.log('arr after filter', anotherNumberList);
console.log(res4);
