var Web3 = require('web3')
var web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

SelfKeyToken.web3.eth.sendTransaction({from: 0x627306090abab3a6e1400e9345bc60c78a8bef57, to: 0xf17f52151ebef6c7334fad080c5704d77216b732, value: 1000000})
SelfKeyToken.web3.eth.getBalance('0x627306090abab3a6e1400e9345bc60c78a8bef57').toNumber()
SelfKeyToken.web3.eth.getBalance('0xf17f52151ebef6c7334fad080c5704d77216b732').toNumber()