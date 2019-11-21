require('dotenv').config();

process.on('unhandledRejection', err => {
  console.error(`Could not delete database: ${err}`);
  process.exit(1);
});

const databaseName = process.argv[2];

console.log('Connecting to database: ' + databaseName);

require('./util')
  .getDBInstance()
  .query(`DROP DATABASE ${databaseName};`)
  .then(result => {
    Promise.resolve(result);
    process.exit(0);
  })
  .catch(error => {
    Promise.reject(error);
  })
