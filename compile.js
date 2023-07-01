const path = require('path'); //cross platform compatibility
const fs = require('fs');
const solc = require('solc');
const inboxPath = path.resolve(__dirname,'contracts','Inbox.sol'); // points to the current working directory
const source = fs.readFileSync(inboxPath,'utf8');
module.exports = (solc.compile(source,1)).contracts[':Inbox'];
console.log(module.exports);