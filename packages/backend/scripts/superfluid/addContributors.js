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

  const daix = await sf.loadSuperToken("fDAIx");

  //Add new member
  await moneyRouter
    .connect(signers[0])
    .addContributors("0xB9f9Af07fAd74C23F35CAeC708515782a15911Ba")
    .then(function(tx) {
      console.log(`
        Congrats! You just successfully added first contributor. 
        Tx Hash: ${tx.hash}
    `);
    });

  //Add new member
  await moneyRouter
    .connect(signers[0])
    .addContributors("0x9309860F6E4B79b1a40BA35327cD6Ae1bb27DaC7")
    .then(function(tx) {
      console.log(`
        Congrats! You just successfully added second contributor. 
        Tx Hash: ${tx.hash}
    `);
    });

  console.log(
    `Addresses of contributors ${moneyRouter.connect(signers[0]).contributors}`
  );

  console.log(`Addresses of contributors 1 ${moneyRouter.contributors[0]}`);

  console.log(`Addresses of contributors 2 ${moneyRouter.contributors[1]}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
