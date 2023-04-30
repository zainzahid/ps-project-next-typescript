const path = require('path');
const cli = require('next/disct/cli/next-build');

async function globalSetup() {
  await cli.nextBuild([path.join(__dirname, "..")]);
}

module.exports = globalSetup;
export {};