function markAdmins(usersList, adminIds) {
  const markAdminsArr = usersList.map(({ id, name }) => {
    const isAdmin = adminIds.includes(id);
    return { id, isAdmin, name };
  });

  return markAdminsArr;
}

// examples
const adminIds = ['1', '3'];
const users = [
  { id: '1', name: 'Bob' },
  { id: '2', name: 'Tom' },
  { id: '3', name: 'Sam' },
  { id: '4', name: 'Tad' },
];
console.log(markAdmins(users, adminIds));

// result:
// [
//    { id: '1', isAdmin: true, name: 'Bob' },
//    { id: '2', isAdmin: false, name: 'Tom' },
//    { id: '3', isAdmin: true, name: 'Sam' },
//    { id: '4', isAdmin: false, name: 'Tad' }
// ];
