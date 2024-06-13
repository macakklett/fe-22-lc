// How to work on tech tasks. Step by step guide

// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?) ++
// 3. Write draft solution & testing - CODE
// 4. Refactoring & final testing -> final solution

// --------------------------Prime numbers
// input: Number
// output: undefinet

// algo
// 1.iterate from 1 to num
// 2. check if N is prime
// 2.1 itarate from 2 to N
// 2.2 check if N % i === 0 is not a prime
// 2.3 in other case -> is prime
// 3. if prime -> console log prime

// function getPrimes(num) {
//   for (let n = 2; n < num; n += 1) {
//     let isPrime = true;
//     for (let i = 2; i < n; i += 1) {
//       if (n % i === 0) isPrime = false;
//     }

//     if (isPrime) {
//       console.log(n);
//     }
//   }
// }

function isPrime(num) {
  for (let n = 2; n < num; n += 1) {
    if (num % n === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(num) {
  for (let n = 2; n < num; n += 1) {
    if (isPrime(n)) console.log(n);
  }
}

console.log(getPrimes(50));
console.log(getPrimes('50'));
console.log(getPrimes(-50));
