const hre = require("hardhat");
const { Framework } = require("@superfluid-finance/sdk-core");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

//to run this script:
//1) Make sure you've created your own .env file
//2) Make sure that you have your network specified in hardhat.config.js
//3) run: npx hardhat run scripts/deploy.js --network mumbai
async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const provider = new hre.ethers.providers.JsonRpcProvider(
    process.env.MUMBAI_URL
  );

  const sf = await Framework.create({
    chainId: (await provider.getNetwork()).chainId,
    provider,
  });

  const signers = await hre.ethers.getSigners();
  // We get the contract to deploy
  const MoneyRouter = await hre.ethers.getContractFactory("MoneyRouter");
  //deploy the money router account using the proper host address and the address of the first signer
  const moneyRouter = await MoneyRouter.deploy(
    sf.settings.config.hostAddress,
    signers[0].address
  );

  await moneyRouter.deployed();

  console.log("MoneyRouter deployed to:", moneyRouter.address);

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(40000);

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: moneyRouter.address,
    constructorArguments: [sf.settings.config.hostAddress, signers[0].address],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
