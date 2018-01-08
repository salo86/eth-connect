import fs from 'fs';
import path from 'path';
import methods from '../methods/index';

// TODO: _contractDir - should be changeable
const _contractDir = "../../../populous-smartcontracts/build/contracts";

const getABI = (name) => {
  const abiPath = path.join(__dirname, _contractDir, name + '.json');

  const contractJSON = JSON.parse(fs.readFileSync(abiPath, 'utf8'));
  const contractABI = contractJSON.abi;

  return contractABI;
}

// TODO: address - should be dynamic

export default {
  _build: (contractName, contractAddress) => {
    return {
      abi: getABI(contractName),
      address: contractAddress,
      transaction: Object.assign({}, methods.transaction)
    }
  },
  populous: {
      abi: getABI('Populous'),
      address: "0xdb332aa258dbf4f8fa173c4ebdb21218a9b6b6ef",
    transaction: methods.transaction,
  },
  depositContractsManager: {
    abi: getABI('DepositContractsManager'),
    address: "0x1f7f1b309281772d01027d9a7664a8802495a006",
    transaction: methods.transaction,
  },
  crowdSale: {
      abi: getABI('Crowdsale'),
      address: "0xdb332aa258dbf4f8fa173c4ebdb21218a9b6b6ef",
    transaction: methods.transaction,
  },
  currencyToken: {
    abi: getABI('CurrencyToken'),
    address: "0xefbf878eb12a79f11e8d3076ef4c228aa3e0a08d",
    transaction: methods.transaction,
  },
};