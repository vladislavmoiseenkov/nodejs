let users = [
  {id: 1, name: 'Bob'},
  {id: 2, name: 'Joe'},
  {id: 3, name: 'Don', groupId: 1},
  {id: 4, name: 'Kally'},
  {name: 'Alex'},
  {name: 'John'},
];

const groups = [
  {id: 1, title: 'First Group'},
  {id: 2, title: 'Last Group'},
];

const createUser = async(users, user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.id = maxId(users) + 1;
      resolve(user);
    }, 1000);
  });
};

const addSelectedGroupToUsers = (users, group) => {
  return new Promise((resolve, reject) => {

    const usersCreatePromises = users
      .map(user => {
        user.groupId = user.groupId || group.id;
        return user;
      })
      .filter(user => !user.id)
      .map(user => {
        return createUser(users, user)
          .then((response) => {
            console.log(response, 'response');
            user = { ...response };
          })
    });

    Promise
      .all(usersCreatePromises)
      .then(() => resolve(users));
  });
};

const maxId = (users) => {
  return users.reduce((acc, i) => {
    if (i.id && i.id > acc) {
      acc = i.id;
    }
    return acc;
  }, 1);
};

addSelectedGroupToUsers(users, groups[0])
  .then((res) => console.log(res));
