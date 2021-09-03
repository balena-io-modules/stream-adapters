const fs = require('fs');
const files = fs.readdirSync(__dirname);
process.on('uncaughtException', (err) => {
  console.error(err)
  throw err
})

for (const file of files) {
  require('./' + file);
}