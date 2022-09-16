const hre = require("hardhat");
const { Framework } = require("@superfluid-finance/sdk-core");
const { ethers } = require("hardhat");
require("dotenv").config();
const MoneyRouterABI = require("../artifacts/contracts/MoneyRouter.sol/MoneyRouter.json")
  .abi;

async function main() {
  //NOTE - make sure you add the address of the previously deployed money router contract on your network
  const moneyRouterAddress = "0x20D765573479b50d3e72580a8fB06661cb544078";

  const provider = new hre.ethers.providers.JsonRpcProvider(
    process.env.MUMBAI_URL
  );

  const sf = await Framework.create({
    chainId: (await provider.getNetwork()).chainId,
    provider,
  });

  const signers = await hre.ethers.getSigners();

  const moneyRouter = new ethers.Contract(
    moneyRouterAddress,
    MoneyRouterABI,
    provider
  );

  //Add new member
  await moneyRouter
    .connect(signers[0])
    .addContributors("0x4A10a99a8E997B9fAb1DAd98cd9D87e5F5Be1185")
    .then(function(tx) {
      console.log(`
        Congrats! You just successfully added new contributor. 
        Tx Hash: ${tx.hash}
    `);
    });

  console.log(
    `Addresses of contributors ${moneyRouter.connect(signers[0]).contributors}`
  );

  console.log(`Address of contributors 3 ${moneyRouter.contributors[2]}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
