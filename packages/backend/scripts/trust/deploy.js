const { ethers } = require("hardhat");
require("@nomiclabs/hardhat-etherscan");

async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so trustFactoryContract here is a factory for instances of our TrustFactory contract.
  */
  const trustFactoryContract = await ethers.getContractFactory("TrustFactory");

  // here we deploy the contract
  const deployedTrustFactoryContract = await trustFactoryContract.deploy(
    "0x4E476F7FB84c785557cDECdbf8CADEbE8EA57C37"
  );

  // Wait for it to finish deploying
  await deployedTrustFactoryContract.deployed();

  // print the address of the deployed contract
  console.log(
    "TrustFactory Contract Address:",
    deployedTrustFactoryContract.address
  );

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(20000);

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: deployedTrustFactoryContract.address,
    constructorArguments: ["0x4E476F7FB84c785557cDECdbf8CADEbE8EA57C37"],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
