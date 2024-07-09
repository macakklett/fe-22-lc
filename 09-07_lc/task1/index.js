import { User } from './user.js';
import { Student } from './student.js';

// const user1 = new User(1, 'Tom', 'Holland');
// console.log(user1);
// user1.setIsAdmin = true;
// console.log(user1);
// console.log(user1.getIsAdmin);
// const student = new Student(2, 'Ivan', 'Shev', 'Shvd', 90);

const getTopStudent = students => {
  const { id, firstName, lastName } = students
    .filter(student => student.getIsActive)
    .reduce((topStusent, currentStudent) => {
      if (currentStudent.points > topStusent.points) {
        return currentStudent;
      }

      return topStusent;
    }, students[0]);

  return { id, firstName, lastName };
};

const user1 = new User(1, 'John', 'Doe');
const user2 = new User(2, 'Jane', 'Doe');
const user3 = new User(3, 'Jim', 'Beam');
const user4 = new User(4, 'Tom', 'Holl');

console.log(user1.getFullName());
console.log(user2.getFullName());
console.log(user3.getFullName());
console.log(user4.getFullName());

// testing
const student1 = new Student(1, 'Tom', 'Doe', 'FE', 100);
const student2 = new Student(2, 'Ivan', 'Shev', 'Shvd', 190);
const student3 = new Student(3, 'Alice', 'Johnson', 'Math', 85);
const student4 = new Student(4, 'Bob', 'Smith', 'Physics', 92);
const student5 = new Student(5, 'Carol', 'Williams', 'Chemistry', 78);
console.log(getTopStudent([student1, student2, student3, student4]));
console.log(getTopStudent([student1, student4, student5]));
console.log(getTopStudent([student3, student5]));
