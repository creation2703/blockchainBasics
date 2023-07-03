// const assert = require('assert');
// const ganache = require('ganache-cli');
// const { Web3 } = require('web3'); // used to be a constructor. Now returns an object.
// const web3 = new Web3(ganache.provider());
// const {abi, evm} = require('../compile');
// let accounts, inbox;
// const initialString = "Hello";
// beforeEach(async () => {
//     accounts = await web3.eth.getAccounts();
//     inbox = await new web3.eth.Contract(abi)
//     // tells the web3 library that there is a contract out there and it expects the following 
//     // interface
//       .deploy({ data: evm.bytecode.object, arguments : [initialString]}) 
//       // arguments are needed to be passed on to the constructor functions
//       .send({ from: accounts[0], gas: '1000000' });
//   });
  

// describe('Inbox', () => {
//     it('deploy the contract', async () =>{
//         console.log(inbox);
//         assert.ok(inbox.options.address); //ok checks if the passed value is defined 
//     });
//     it('default message', async () =>{
//         const message = await inbox.methods.message().call(); 
//         // call() to view the deployed contract
//         assert.equal(message, "Hello");
//     });
//     it('change the message', async () =>{
//         await inbox.methods.setString("dayumm").send({from : accounts[0]});
//         // send() sends the transactions
//         const newString = await inbox.methods.message().call();
//         assert.equal(newString, "dayumm");
//     });
// });
const assert = require('assert');
const ganache = require('ganache');
const { Web3 } = require('web3');
const web3 = new Web3(ganache.provider());
 
const { abi, evm } = require('../compile');
 
let accounts;
let inbox;
 
beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  inbox = await new web3.eth.Contract(abi)
    .deploy({
      data: evm.bytecode.object,
      arguments: ['Hi there!'],
    })
    .send({ from: accounts[0], gas: '1000000' });
});
 
describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address);
  });
  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Hi there!');
  });
  it('can change the message', async () => {
    await inbox.methods.setString('bye').send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, 'bye');
  });
});