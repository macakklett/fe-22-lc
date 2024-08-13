// class User {
//   constructor(id) {
//     this.id = id;
//     this.isLogIn = false;
//   }

//   logIn() {
//     //logic
//     console.log(`user with ID ${this.id} is logged in`);

//     this.isLogIn = true;
//   }

//   logOut() {
//     //logic
//     console.log(`user with ID ${this.id} is logged out`);

//     this.isLogIn = false;
//   }
// }

// const user = new User(42);
// console.log(user.isLogIn);

// user.logIn();
// console.log(user.isLogIn);

// function logIn() {
//   //logic
//   console.log(`user with ID ${this.id} is logged in`);
// }

// logIn();

// const context = { id: 42 };
// const logInBinded = logIn.bind(context);
// logInBinded();

// lose context #1
const testUser = {
  id: 100,
  isLogIn: false,

  logIn() {
    console.log(`user with ID ${this.id} is logged in`);

    this.isLogIn = true;
  },
};

console.log(testUser.isLogIn);

const logInFunc = testUser.logIn();
logInFunc();
console.log(testUser.isLogIn);
