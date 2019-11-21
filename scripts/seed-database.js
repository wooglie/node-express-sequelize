const fs = require('fs');
const runSeeders = require('./util').runSeeders;
require('dotenv').config();

const url = `${process.env.AUTOMATION_DATABASE_URL}/${process.argv[3]}`;
// console.log(`Environment: ${process.env.IA_ENV}` )
// const target = `seeders/${process.env.IA_ENV}`;
// if (fs.existsSync(target) && fs.readdirSync(target).find(s => s.match(/\.js$/))) {
//   runSeeders(url, process.argv[2], target);
// }

if (fs.readdirSync('seeders').find(s => s.match(/\.js$/))) {
  runSeeders(url, process.argv[2], '');
}
