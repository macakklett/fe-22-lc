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
    return `${this.firstName} ${this.lastName}`;
  }
}
