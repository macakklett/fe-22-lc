// algo
// 0 create empty element
// 1. iterate arr
// 2. apply callback for each el
// 3. if callback true -> push to new arr

//input arr, callback
//output arr

// callback
//input: element , index, array
//output boll
const filterArrayElements = (arr, callback) => {
  const res = [];

  for (let index = 0; index <= arr.length; index += 1) {
    if (callback(arr[index], index.arr)) {
      res.push(arr[index]);
    }
  }

  return res;
};

//testing
const test = [1, 10, 5, 7];

console.log(filterArrayElements(test, (el, index) => index > 1 && el > 5));
