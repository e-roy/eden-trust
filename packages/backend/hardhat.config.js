require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
require("hardhat-gas-reporter");
require("solidity-coverage");

task("accounts", "Prints the list of accounts", async (_, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const defaultNetwork = "localhost";

module.exports = {
  solidity: "0.8.14",
  defaultNetwork,
  networks: {
    localhost: {
      chainId: 31337,
    },
    // hardhat: {
    //   blockGasLimit: 100000000000,
    // },
    // mumbai: {
    //   url: process.env.MUMBAI_URL || "",
    //   accounts:
    //     process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    // },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_KEY,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
    tokenOwner: 1,
    etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY,
    },
  },
};
