function getUserEndpoints(data, userId) {
  if (!userId) return null;

  const user = data
    .filter(el => el.id === userId)
    .map(obj => {
      obj.endpoint.split('/').map((el, index) => {
        (el === '{userId}' ? userId : el);
      } 
    });
  console.log(user);
}

// examples
getUserEndpoints(
  [
    { id: 1001, endpoint: '/api/users/{userId}/data' },
    { id: 4422, endpoint: '/api/users/data' },
    { id: 1001, endpoint: '/api/users/location' },
    { id: 9999, endpoint: '/api/users/{userId}/validation' },
    { id: 4422, endpoint: '/api/users/{userId}/validation' },
  ],
  4422,
); // ===> ['/api/users/data', '/api/users/4422/validation']
