// function objIntersection(firstObj, secondObj) {
//   const arr = Object.entries(firstObj);
//   console.log(arr);
//   arr.reduce((acc, [prop, value]) => {
//     if (secondObj.hasOwnProperty(prop) && secondObj[prop] === value) {
//       return { ...acc, [prop]: value };
//     }

//     return acc;
//   }, {});
// }

function objIntersection(firstObj, secondObj) {
  return Object.keys(firstObj).reduce((acc, key) => {
    if (secondObj[key] === firstObj[key]) return { ...acc, [key]: firstObj[key] };
    return acc;
  }, {});
}

// examples
// #1
const obj1 = { id: 1, points: 2, signature: 'saas' };
const obj2 = { id: 1, points: 5, signature: 'teewe' };
console.log(objIntersection(obj1, obj2)); // returns ==> { id: 1 }

// #2
const obj3 = { id: 1, points: 2, signature: 'eeew' };
const obj4 = { signature: 'eeew' };
objIntersection(obj3, obj4); // returns ==> { sihnature: 'eeew' }

// #3
const obj5 = { id: 1, points: 2, signature: 'eeew' };
const obj6 = { width: 100, height: 200 };
objIntersection(obj5, obj6); // returns ==> {}
