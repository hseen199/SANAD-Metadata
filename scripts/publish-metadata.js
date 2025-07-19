// publish-metadata.js
const fs = require('fs');
async function main() {
  const metadata = JSON.parse(fs.readFileSync('metadata/metadata.json'));
  console.log('Publishing metadata to IPFS...', metadata);
  // IPFS logic here
}
main();
