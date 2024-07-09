import { User } from './user.js';

export class Student extends User {
  #isActive = true;

  constructor(id, firstName, lastName, group, points) {
    super(id, firstName, lastName);
    this.group = group;
    this.points = points;
  }

  get getIsActive() {
    return this.#isActive;
  }

  set setIsActive(value) {
    this.#isActive = value;
  }
}

const student1 = new Student(1, 'Tom', 'Doe', 'FE', 100);
const student2 = new Student(2, 'Ivan', 'Shev', 'Shvd', 190);
const student3 = new Student(3, 'Alice', 'Johnson', 'Math', 85);

console.log(student1.getFullName());
console.log(student2.getFullName());
console.log(student3.getFullName());
