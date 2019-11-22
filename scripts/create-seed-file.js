// Copy the migration template into a new file, named [timestamp].js in the /migrations/ folder

const fs = require('fs');

fs.createReadStream('./scripts/seed-template.js').pipe(
  fs.createWriteStream(`./seeders/${new Date().getTime()}.js`)
);
