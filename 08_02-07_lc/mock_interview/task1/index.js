'use strict';

/**
 * @param {number[]} amount
 * @return {number[]}
 */

const getInterval = numbers => {
  return numbers.reduce(
    (acc, el) => {
      let min = acc[0];
      let max = acc[1];

      if (max < el) max = el;
      if (min > el) min = el;

      return [min, max];
    },
    [numbers[0], numbers[0]],
  );
};

// examples
console.log(getInterval([1, 50, 0, 90, 5])); // [0, 90]
console.log(getInterval([-10, -2, -5, -20, -3])); // [-20, -2]
console.log(getInterval([100, 200, 300, 400, -500])); // [-500, 400]

// https://gromcode.com/ua/users/18404/solutions/535365
