/**
 * @param {number[]} results
 * @return {string[]}
 */

function getStatuses(results) {
  // validate
  //algo 1
  //1. filter not valid elements
  // 2. if length > 0 - not valid
  // if (results.filter(el => el < 0 || el > 100).length > 0) {
  //   return null;
  // }
  // algo 2
  if (results.some(el => el < 0 || el > 100)) {
    return null;
  }

  //input: callback, this(context)
  //output: array

  // input: element array, index, array(optional)
  // output: changed element

  //
  // const newArray = results.map(function (el, index, array) {
  //   if (el >= 90) {
  //     return 'Passed';
  //   } else {
  //     return 'Failed';
  //   }
  // });
  // return newArray;
  return results.map(el => (el >= 90 ? 'Passed' : 'Failed'));
}

console.log(getStatuses([25, 40, 74, 58, 100, 5]));
console.log(getStatuses([1000, 450]));
console.log(getStatuses([]));
