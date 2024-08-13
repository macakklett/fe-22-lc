// input: number number callback
// output: undefined

//algo
// 1. Iterate from - to
// 2. call callback

function sum(from, to, resolver) {
  let res = 0;
  for (let index = from; index <= to; index += 1) {
    res += index;
  }

  resolver(res);
}

// input number
// undefined

function printResult(res) {
  console.log('Result is: ', res);
}

// testing
// console.log(sum(10, 5, printResult));
// console.log(sum('10', 5, printResult));

sum(5, 10, printResult);
