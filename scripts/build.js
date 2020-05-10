const { execSync } = require('child_process');
const fs = require('fs');


if (!fs.existsSync(`${__dirname}/../.buildme`)) {
  console.log('Skipping build because install from npm');
  return;
}

console.log('Installing because install is from repo');
function exec(command) {
  execSync(command, { stdio: [0, 1, 2] });
}

exec('npm run build');
// exec('npm run build-umd');
// exec('npm run build-min');
