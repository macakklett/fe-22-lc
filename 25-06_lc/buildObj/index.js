// input: arr, arr
// output: object

// 1. create obj
// 2. iterate keysList get key/value by index
// 3. add key/value to obj

// function buildObject(keysList, valuesList) {
//   let obj = [];

//   for (let index = 0; index < keysList.length; index += 1) {
//     const key = keysList[index];
//     const value = valuesList[index];

//     obj = { ...obj, [key]: value };
//   }

//   return obj;
// }

// v2
// function buildObject(keysList, valuesList) {

//   return keysList.reduce((obj, key, index) => {
//     const value = valuesList[index];
//     return { ...obj, [key]: value };
//   }, {});
// }

// v3
function buildObject(keysList, valuesList) {
  return keysList.reduce((obj, key, index) => ({ ...obj, [key]: valuesList[index] }), {});
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Vasyl', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Vasyl', address: 'Ukraine', age: 34 }
console.log(result);
