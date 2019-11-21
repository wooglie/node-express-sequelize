const { execSync } = require('child_process');
const Sequelize = require('sequelize-typescript').Sequelize;

function getDBInstance() {
  const modelsPath = `${__dirname}/modules/**/*.model.+(t|j)s`;

  return new Sequelize({
    host: process.env.DB_MASTER_ENDPOINT,
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_MASTER_USER,
    password: process.env.DB_MASTER_PASS,
    models: [modelsPath],
    logging: true,
  });
}

function runMigrations(url, subcmd) {
  const cmd = `node_modules/.bin/sequelize db:${subcmd} --url ${url}`;
  console.log('running migrations...');
  const result = execSync(cmd).toString();
  console.log(result);
}

function runSeeders(url, subcmd, target) {
  console.log('running seeders... ' + (target || ''));
  const envTarget = target ? ` --seeders-path ${target}` : '';
  const cmd = `node_modules/.bin/sequelize db:${subcmd} --url ${url}` + envTarget;
  const result = execSync(cmd).toString();
  console.log(result);
}

module.exports = {
  getDBInstance,
  runMigrations,
  runSeeders
};
