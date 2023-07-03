// const path = require('path'); //cross platform compatibility
// const fs = require('fs');
// const solc = require('solc');
// const inboxPath = path.resolve(__dirname,'contracts','Inbox.sol'); // points to the current working directory
// const source = fs.readFileSync(inboxPath,'utf8');
// module.exports = (solc.compile(source,1)).contracts[':Inbox'];
// console.log(module.exports);

const path = require('path');
const fs = require('fs');
const solc = require('solc');
 
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');
 
const input = {
  language: 'Solidity',
  sources: {
    'Inbox.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};
 
module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  'Inbox.sol'
].Inbox;
console.log(module.exports);