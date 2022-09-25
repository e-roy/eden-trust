// Script to verify trust contract

const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");

async function main() {
  await hre.run("verify:verify", {
    address: "0xdF0e1E9C842f2f83Bb1c6FDaFee5D46BeBB67747", // address of trust contract
    constructorArguments: [
      10, // percentage
      "0x4E476F7FB84c785557cDECdbf8CADEbE8EA57C37", // onwer of trust contract
      2, // Gigs promised
      "0x19E8a5A2Eac4B694B67b4Dd510C339184a1888B0", // platform address
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
