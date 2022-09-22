const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");

async function main() {
  await hre.run("verify:verify", {
    address: "0x4690BeecBe0A642bE0846dE6d600C7425Eed717B",
    constructorArguments: [
      1,
      10,
      "0x4e476f7fb84c785557cdecdbf8cadebe8ea57c37",
      2,
      "0x3cf87f0213685ad1679c5e88a3d84a656d94cf1e",
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
