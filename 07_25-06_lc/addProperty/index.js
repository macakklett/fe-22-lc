// objects
// add property
// read property
// filter, map, reduce
// assign, keys/values, entries, freeze

// input: obj, string, value (any)
// output: obj

function addProperyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

function addProperyV2(obj, key, value) {
  // assign
  // input: init obj, obj, ...objN
  // output: obj
  return Object.assign(obj, { [key]: value });
}

function addProperyV3(obj, key, value) {
  // assign
  // input: init obj, obj, ...objN
  // output: new obj
  return Object.assign({}, obj, { [key]: value });
}

function addProperyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

function addProperyV4(obj, ...args) {
  const res = args.reduce((acc, el, index) => {
    if (index % 2 === 1) {
      return acc;
    }
    return { ...acc, [el]: args[index + 1] };
  }, {});

  return { ...obj, ...res };
}

//testing
const user = {
  id: 1001,
  height: 170,
};

console.log(addProperyV1(user, 'name', 'Vitalii', 'email', 'v@gmail.com', 'age', 25));
console.log(user);

// spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [3, 5, 7];
// const arr3 = [...arr1, ...arr2];

objCopy = { ...obj, age: 18, email: 'gmail.com' };

// destructuring
const { email, ...objPart } = objCopy;
console.log(email, objPart);

const [firstElement, ...arrRest] = [1, 2, 5, 7, 9];
console.log(firstElement, arrRest);
