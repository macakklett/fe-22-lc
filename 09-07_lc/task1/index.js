// import { User } from './user';
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

// testing
const student1 = new Student(1, 'Tom', 'Doe', 'FE', 100);
const student2 = new Student(2, 'Ivan', 'Shev', 'Shvd', 190);
console.log(getTopStudent([student1, student2]));
