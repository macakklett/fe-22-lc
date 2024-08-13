// Algo
// 1. check lenght of filterObj
// 1.1 if obj is empty -> return products
// 2. filter products

// function filterProducts(products, filterObj) {
//   let filteredProducts = [...products];

//   // if (filterObj.hasOwnProperty('city')) {
//   //   filteredProducts = filteredProducts.filter(el => el['city'] === filterObj['city']);
//   // }

//   // if (filterObj.hasOwnProperty('price')) {
//   //   filteredProducts = filteredProducts.filter(
//   //     el => Number(el['price']) <= Number(filterObj['price']),
//   //   );
//   // }

//   // v2

//   Object.entries(filterObj).forEach(([prop, value]) => {
//     filteredProducts = products.filter(product => {
//       if (prop === 'price') {
//         return product[prop] <= value;
//       }

//       return product[prop] === value;
//     });
//   });

//   return filteredProducts;
// }

function filterProducts(products, filterObj) {
  return products.filter(product => {
    // Перевірка міста
    if (filterObj.city && product.city !== filterObj.city) {
      return false;
    }

    // Перевірка ціни
    if (filterObj.price && product.price > filterObj.price) {
      return false;
    }

    return true;
  });
}

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 999.99,
    city: 'New York',
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 599.99,
    city: 'Los Angeles',
    category: 'Electronics',
  },
  {
    id: 3,
    name: 'Desk Chair',
    price: 89.99,
    city: 'Chicago',
    category: 'Furniture',
  },
  {
    id: 4,
    name: 'Coffee Maker',
    price: 49.99,
    city: 'Houston',
    category: 'Home Appliances',
  },
  {
    id: 5,
    name: 'Book',
    price: 19.99,
    city: 'New York',
    category: 'Books',
  },
  {
    id: 6,
    name: 'T-shirt',
    price: 14.99,
    city: 'Phoenix',
    category: 'Clothing',
  },
  {
    id: 7,
    name: 'Bicycle',
    price: 299.99,
    city: 'San Antonio',
    category: 'Sports',
  },
];

// examples
// #1
console.log(filterProducts(products, { city: 'New York' }));
// returns ==>
// [
//   { id: 1, name: 'Laptop', price: 999.99, city: 'New York', category: 'Electronics' },
//   { id: 5, name: 'Book', price: 19.99, city: 'New York', category: 'Books' },
// ];

// #2
console.log(filterProducts(products, { price: 50 }));
// returns ==>
// [
//   { id: 4, name: 'Coffee Maker', price: 49.99, city: 'Houston', category: 'Home Appliances' },
//   { id: 5, name: 'Book', price: 19.99, city: 'New York', category: 'Books' },
//   { id: 6, name: 'T-shirt', price: 14.99, city: 'Phoenix', category: 'Clothing' },
// ];

// #3
console.log(filterProducts(products, { city: 'New York', price: 50 }));
// returns ==>
// [{ id: 5, name: 'Book', price: 19.99, city: 'New York', category: 'Books' }];
console.log(filterProducts(products, {}));
