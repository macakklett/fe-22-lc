// Algo
// 1. with method entire create two arrays from firstObj and second obj
// 2. filter one array(compare elements)
// 3. create and return new obj from filtered array

function objIntersection(firstObj, secondObj) {
  const firstArr = Object.entries(firstObj);
  // const secondArr = Object.entries(secondObj);

  // firstArr.filter((el, index) => el[0] === secondArr[index][0] && el[1] === secondArr[index][1]);
  return firstArr.reduce((acc, [prop, value]) => {
    if (secondObj.hasOwnProperty(prop) && value === secondObj[prop]) {
      return { ...acc, [prop]: value };
    }

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
console.log(objIntersection(obj3, obj4)); // returns ==> { sihnature: 'eeew' }

// #3
const obj5 = { id: 1, points: 2, signature: 'eeew' };
const obj6 = { width: 100, height: 200 };
console.log(objIntersection(obj5, obj6)); // returns ==> {}
