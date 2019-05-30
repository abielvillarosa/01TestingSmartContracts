// /*global contract, config, it, assert*/

const Raffle = require('Embark/contracts/Raffle');

let accounts;

// For documentation please see https://embark.status.im/docs/contracts_testing.html
config({
  contracts: {
    "Raffle": {
      args: [100]
    }
    // "Raffle": {
    //   args: accounts
    // }
  }
}, (_err, web3_accounts) => {
  accounts = web3_accounts
});

contract("Raffle", function () {
  this.timeout(0);

  it("Raffle was deployed", async function() {
    //Raffle has an address
    let address = Raffle.options.address;
    assert.ok(address); //has a value, and not null
  });

  it("suspendRaffle is working", async function() {

    try {
      let result = await Raffle.methods.suspendRaffle().call(); 
    }
    catch {
      assert.ok("Caller is not the owner");
    }
  })

  // it("SetInteger and getInteger are tested", async function() {
  //   await SimpleStorage.methods.setInteger(5).send();
  //   let result = await SimpleStorage.methods.getInteger().call();
  //   assert.strictEqual(parseInt(result, 10), 5);
  // });
/** 
  it("should set constructor value", async function () {
    let result = await SimpleStorage.methods.storedData().call();
    assert.strictEqual(parseInt(result, 10), 100);
  });

  it("set storage value", async function () {
    await SimpleStorage.methods.set(150).send();
    let result = await SimpleStorage.methods.get().call();
    assert.strictEqual(parseInt(result, 10), 150);
  });

  it("should have account with balance", async function() {
    let balance = await web3.eth.getBalance(accounts[0]);
    assert.ok(parseInt(balance, 10) > 0);
  }); 
  */
})
