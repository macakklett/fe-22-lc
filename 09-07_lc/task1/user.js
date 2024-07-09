export class User {
  #isAdmin = false;

  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get getIsAdmin() {
    return this.#isAdmin;
  }

  set setIsAdmin(value) {
    console.log('setter working');

    if (typeof value !== 'boolean') {
      console.error('value is not a boolean type');
      return;
    }

    this.#isAdmin = value;
  }

  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
    return `${this.firstName} ${this.lastName}`;
  }
}

const user1 = new User(1, 'John', 'Doe');
const user2 = new User(2, 'Jane', 'Doe');
const user3 = new User(3, 'Jim', 'Beam');

console.log(user1.getFullName());
console.log(user2.getFullName());
console.log(user3.getFullName());
