export default {

  getDepositAddress: (connect, contract, from, clientId) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    const params = {
      clientId: connect.utils.asciiToHex(clientId),
    };

    return contractInstance.methods
      .getDepositAddress(...Object.values(params))
      .call({
        from: from,
      });
  },

  getActiveDepositList: (connect, contract, from, clientId, tokenContract, receiveCurrency) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    const params = {
      clientId: connect.utils.asciiToHex(clientId),
      tokenContract: tokenContract,
      receiveCurrency: connect.utils.asciiToHex(receiveCurrency),
    };

    return contractInstance.methods
      .getActiveDepositList(...Object.values(params))
      .call({
        from: from,
      });
  },

  getActiveDeposit: (connect, contract, from, clientId, tokenContract, receiveCurrency, depositIndex) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    const params = {
      clientId: connect.utils.asciiToHex(clientId),
      tokenContract: tokenContract,
      receiveCurrency: connect.utils.asciiToHex(receiveCurrency),
      depositIndex: depositIndex,
    };

    return contractInstance.methods
      .getActiveDeposit(...Object.values(params))
      .call({
        from: from,
      });
  },

};