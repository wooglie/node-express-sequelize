// Copy the migration template into a new file, named [timestamp].js in the /migrations/ folder

const fs = require('fs');

fs.createReadStream('./scripts/migration-template.js').pipe(
  fs.createWriteStream(`./migrations/${new Date().getTime()}.js`)
);
