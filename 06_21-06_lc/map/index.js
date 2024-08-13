// algo
// 0 create empty element
// 1. iterate arr
// 2. apply callback for each el
// 3. add changed el to arr

//input arr, callback
//output arr

// callback
//input: element , index(optional), array(optional)
//output changed element
const mapArrayElements = (arr, callback) => {
  const res = [];

  for (let index = 0; index < arr.length; index += 1) {
    res.push(callback(arr[index], index));
  }

  return res;
};

//testing
// const test = [1, 10, 5, 7, 3, 9, 6];

// console.log(mapArrayElements(test, (el, index) => (index > 2 ? el * el : el)));
// res -> [1, 10, 5, 49, 9, 81, 36]
