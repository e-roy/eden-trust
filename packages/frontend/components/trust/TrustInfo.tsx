import { useEffect, useState } from "react";
import { useContract, useProvider } from "wagmi";

import trust from "@/abis/trust.json";
import { ethers } from "ethers";

import { GetPaid, ProjectCompleted } from "./";
import { Address } from "@/components/elements";

export interface ITrustInfoProps {
  usersContract: string;
  onContractComplete: (val: any) => void;
}

export const TrustInfo = ({
  usersContract,
  onContractComplete,
}: ITrustInfoProps) => {
  const [percentage, setPercentage] = useState("");
  const [gigCount, setGigCount] = useState("");
  const [balanceContract, setBalanceContract] = useState("");
  // const [balanceOwner, setBalanceOwner] = useState("");
  const [believers, setBelievers] = useState("");
  const [projectsFinished, setProjectsFinished] = useState("");

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
        const noOfBelievers = await trustContract.noOfBelievers();
        setBelievers(noOfBelievers.toString());
        const projectCount = await trustContract.projectCount();
        setProjectsFinished(projectCount.toString());

        const balanceContract = await trustContract.getContractBalance();
        setBalanceContract(ethers.utils.formatEther(balanceContract));
        // const balanceOwner = await trustContract.getOwnerBalance();
        // setBalanceOwner(ethers.utils.formatEther(balanceOwner));

        // const getBeliverBalance = await trustContract.getBeliverBalance();
        // console.log(
        //   "getBeliverBalance",
        //   ethers.utils.formatEther(getBeliverBalance)
        // );

        // const platformAddress = await trustContract.platformAddress();
        // console.log("platformAddress", platformAddress);
        // const creation = await trustContract.contractCreationTime();
        // console.log("creation", creation);
        if (
          projectCount.toString() === gigCount.toString() &&
          gigCount !== "0" &&
          projectCount !== "0" &&
          ethers.utils.formatEther(balanceContract) === "0.0"
        ) {
          onContractComplete(true);
        }
      } catch (error) {
        console.log(error);
      }
  };
  useEffect(() => {
    handleContractData();
  }, [usersContract]);

  return (
    <div className={`max-w-lg m-auto`}>
      <div className={`text-2xl text-slate-700 font-bold text-center mb-8`}>
        Your Trust
      </div>
      <Address address={usersContract} />

      <div className={`text-sm text-slate-600`}>
        <div>Contract Balance : {balanceContract} MATIC</div>
        <div className={`flex justify-between`}>
          <div>Total Believers : {believers}</div>

          <div>percentage to believers : {percentage}</div>
        </div>

        <div>total gigs to complete : {gigCount}</div>
        <div>total projects finished : {projectsFinished}</div>
      </div>
      {projectsFinished < gigCount ? (
        <ProjectCompleted
          contractAddress={usersContract}
          refetch={handleContractData}
        />
      ) : (
        <GetPaid contractAddress={usersContract} refetch={handleContractData} />
      )}
    </div>
  );
};
