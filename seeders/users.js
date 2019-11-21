'use strict';

const date = '2019-10-31 09:04:36'

const USERS = [
  {
    createdAt: date,
    updatedAt: date,
    uid: 'z053f596',
    email: 'user@email.com',
    password: 'password',
  }
];

function clearUsers(queryInterface) {
  return queryInterface.bulkDelete('Users', null, {})
}

function insertUsers(queryInterface) {
  return queryInterface.bulkInsert({ tableName: 'Users' }, USERS);
}

module.exports = {
  up: queryInterface => {
    return clearUsers(queryInterface).then(() => insertUsers(queryInterface));
  },

  down: queryInterface => {
    return clearUsers(queryInterface);
  }
};
