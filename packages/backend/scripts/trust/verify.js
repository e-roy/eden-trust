// Script to verify trust contract

const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");

async function main() {
  await hre.run("verify:verify", {
    address: "0x16458eAf2eCe2954aAFd2c149c0F79b589f10eC5",
    constructorArguments: [
      10,
      "0x4E476F7FB84c785557cDECdbf8CADEbE8EA57C37",
      5,
      "0x8Af2FB1384DD075898341980Fc3Ba3e1b7bF9181",
    ],
  });
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
