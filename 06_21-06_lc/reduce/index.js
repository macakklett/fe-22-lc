/**
 * @param {number[]} transactions
 * @return {number}
 */
// algo 1
// 1. filter expenses
// 2. make positive
// 3. sum

// algo 2
//iterate elements
// 2. sum expenses
// 3. make sum positive
function calcExpenses(transactions) {
  // reduce
  // callback, initialValue(optional), this (optional)
  // output: anything
  //callback
  //input: (acc, el, index(optional), array(optional))
  //output: new acc (any)

  // Draft solution
  //   const res = transactions.reduce((acc, el, index) => {
  //     console.log('STEP' + index);
  //     console.log('acc' + acc);
  //     console.log('el' + el);

  //     // if (el < 0) {
  //     //   acc += el;
  //     // }

  //     return acc < 0 ? acc + el : acc;
  //   }, 0);

  //   console.log('res', res);
  //   return Math.abs(res);
  // }

  return Math.abs(transactions.reduce((acc, el) => (el < 0 ? (acc -= el) : acc), 0));
}

// examples
calcExpenses([25, 40, -74, 58, -100, -5]); // returns ==> 179
calcExpenses([5000, 450]); // returns ==> 0
console.log(calcExpenses([25, 40, -74, 58, -100, -5]));
