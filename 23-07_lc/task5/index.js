// function calcSalesByCompany(data, year) {
//   const filteredData = data.filter(el => !year || el.year === year);
//   // console.log(filteredData);

//   const reducer = filteredData.reduce((acc, { company, salesCount }) => {
//     acc[company] = (acc[company] || 0) + salesCount;
//     return acc;
//   }, {});
//   // console.log(reducer);

//   // variant without method filter
//   // const reducer = data.reduce((acc, { company, salesCount, year: itemYear }) => {
//   //   if (!year || itemYear === year) {
//   //     acc[company] = (acc[company] || 0) + salesCount;
//   //   }
//   //   return acc;
//   // }, {});
// }

// different output
function calcSalesByCompany(data, year) {
  const filteredData = data.filter(el => !year || el.year === year);
  // console.log(filteredData);

  // const reducer = filteredData.reduce((acc, { company, salesCount }) => {
  //   acc[company] = (acc[company] || 0) + salesCount;
  //   return acc;
  // }, {});

  const reducer = filteredData.reduce((acc, { company, salesCount }) => {
    // acc[company] = (acc[company] || 0) + salesCount;
    return [...acc, { [company]: (salesCount += salesCount || 0) }];
  }, []);
  console.log(reducer);

  // variant without method filter
  // const reducer = data.reduce((acc, { company, salesCount, year: itemYear }) => {
  //   if (!year || itemYear === year) {
  //     acc[company] = (acc[company] || 0) + salesCount;
  //   }
  //   return acc;
  // }, {});
}

// examples
const data = [
  { company: 'Honda', model: 'Civic', salesCount: 5000, month: 'Mar', year: 2020 },
  { company: 'Toyota', model: 'Corolla', salesCount: 84456, month: 'Jun', year: 2020 },
  { company: 'Toyota', model: 'Corolla', salesCount: 100520, month: 'Jan', year: 2021 },
  { company: 'Toyota', model: 'Corolla', salesCount: 90100, month: 'Mar', year: 2021 },
  { company: 'Honda', model: 'Accord', salesCount: 113265, month: 'Dec', year: 2021 },
  { company: 'Honda', model: 'Civic', salesCount: 105749, month: 'Jul', year: 2021 },
  { company: 'Ford', model: 'Fusion', salesCount: 53666, month: 'Jan', year: 2021 },
  { company: 'Toyota', model: 'Corolla', salesCount: 90100, month: 'Jan', year: 2022 },
  { company: 'Ford', model: 'Focus', salesCount: 90100, month: 'Dec', year: 2022 },
  { company: 'Ford', model: 'Focus', salesCount: 90100, month: 'Dec', year: 2022 },
  { company: 'Ford', model: 'Mustang', salesCount: 113953, month: 'Sep', year: 2022 },
  { company: 'Honda', model: 'Civic', salesCount: 70496, month: 'Feb', year: 2022 },
  { company: 'Toyota', model: 'RAV4', salesCount: 64948, month: 'Feb', year: 2022 },
  { company: 'Nissan', model: 'Leaf', salesCount: 92658, month: 'Feb', year: 2022 },
  { company: 'Toyota', model: 'Camry', salesCount: 82038, month: 'May', year: 2023 },
  { company: 'Toyota', model: 'RAV4', salesCount: 84580, month: 'Nov', year: 2023 },
];

// console.log(calcSalesByCompany(data, 2021)); // returns ==> { Toyota: 190620, Honda: 219014, Ford: 53666 }
console.log(calcSalesByCompany(data)); // returns ==> { Honda: 294510, Toyota: 596742, Ford: 347819, Nissan: 92658 }
