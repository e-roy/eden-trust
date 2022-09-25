import { useEffect, useState } from "react";
import { useContract, useProvider } from "wagmi";

import trust from "@/abis/trust.json";

import { ethers } from "ethers";

import { GetPaid } from "./GetPaid";

import { FiExternalLink } from "react-icons/fi";

export interface ITrustInfoProps {
  usersContract: string;
}

export const TrustInfo = ({ usersContract }: ITrustInfoProps) => {
  const [percentage, setPercentage] = useState("");
  const [gigCount, setGigCount] = useState("");
  const [balanceContract, setBalanceContract] = useState("");
  const [balanceOwner, setBalanceOwner] = useState("");
  const [believers, setBelievers] = useState("");

  const provider = useProvider();

  const trustContract = useContract({
    addressOrName: usersContract,
    contractInterface: trust.abi,
    signerOrProvider: provider,
  });

  const handleContractData = async () => {
    // console.log("trustContract", trustContract);
    if (usersContract !== "0x0000000000000000000000000000000000000000")
      try {
        const percentage = await trustContract.percentage();
        setPercentage(percentage.toString());
        const gigCount = await trustContract.gigCount();
        setGigCount(gigCount.toString());
        const balanceContract = await trustContract.getContractBalance();
        setBalanceContract(ethers.utils.formatEther(balanceContract));
        const balanceOwner = await trustContract.getContractBalance();
        setBalanceOwner(ethers.utils.formatEther(balanceOwner));
        const noOfBelievers = await trustContract.noOfBelievers();
        setBelievers(noOfBelievers.toString());

        const getOwnerBalance = await trustContract.getOwnerBalance();
        console.log("getOwnerBalance", getOwnerBalance.toString());

        // const platformAddress = await trustContract.platformAddress();
        // console.log("platformAddress", platformAddress);
        // const creation = await trustContract.contractCreationTime();
        // console.log("creation", creation);
      } catch (error) {
        console.log(error);
      }
  };
  useEffect(() => {
    handleContractData();
  }, [usersContract]);

  return (
    <div>
      <div className={`text-2xl text-slate-700 font-bold text-center mb-8`}>
        Your Trust
      </div>
      <div className={`font-medium text-slate-500 pb-4 flex`}>
        {usersContract}{" "}
        <a
          href={`https://mumbai.polygonscan.com/address/${usersContract}`}
          target="_blank"
          rel="noreferrer"
        >
          <FiExternalLink className={`mx-2 my-1`} />
        </a>
      </div>
      <div>Total Believers : {believers}</div>

      <div>percentage : {percentage}</div>
      <div>gigCount : {gigCount}</div>
      <div>balanceContract : {balanceContract} MATIC</div>
      <div>balanceOwner: {balanceOwner} MATIC</div>
      <GetPaid
        contractAddress={usersContract}
        balanceContract={balanceContract}
      />
    </div>
  );
};
