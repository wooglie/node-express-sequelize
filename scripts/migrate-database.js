require('dotenv').config();

process.on('unhandledRejection', err => {
  console.error(err);
  process.exit(1);
});

process.on('uncaughtException', err => {
  console.error(err);
  process.exit(1);
});

const url = `${process.env.AUTOMATION_DATABASE_URL}/${process.argv[3]}`;
require('./util').runMigrations(url, process.argv[2]);
