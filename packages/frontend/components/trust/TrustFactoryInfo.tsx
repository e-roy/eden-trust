import { useEffect, useState, useCallback } from "react";
import { useContract, useProvider, useAccount } from "wagmi";

import trustFactory from "@/abis/trustFactory.json";
import trust from "@/abis/trust.json";
import { TRUST_FACTORY_ADDRESS } from "@/constants";

import { Button, Card } from "@/components/elements";

export const TrustFactoryInfo = () => {
  const [numOfContracts, setNumOfContracts] = useState("");
  const [usersContract, setUsersContract] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [percentage, setPercentage] = useState("");
  const [gigCount, setGigCount] = useState("");
  const [balanceContract, setBalanceContract] = useState("");
  const [balanceOwner, setBalanceOwner] = useState("");
  const [believers, setBelievers] = useState("");

  const provider = useProvider();

  const { address } = useAccount();

  const trustFactoryContract = useContract({
    addressOrName: TRUST_FACTORY_ADDRESS,
    contractInterface: trustFactory.abi,
    signerOrProvider: provider,
  });

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
        setBalanceContract(balanceContract.toString());
        const balanceOwner = await trustContract.getContractBalance();
        setBalanceOwner(balanceOwner.toString());
        const noOfBelievers = await trustContract.noOfBelievers();
        setBelievers(noOfBelievers.toString());

        const getOwnerBalance = await trustContract.getOwnerBalance();
        console.log("getOwnerBalance", getOwnerBalance.toString());

        const platformAddress = await trustContract.platformAddress();
        console.log("platformAddress", platformAddress);
        const creation = await trustContract.contractCreationTime();
        console.log("creation", creation);
      } catch (error) {
        console.log(error);
      }
  };

  const fetchData = useCallback(async () => {
    // console.log("trustFactoryContract", trustFactoryContract);
    if (loading)
      try {
        const num = await trustFactoryContract.numOfTrustContracts();
        setNumOfContracts(num.toString());
        console.log(address);
        const contract = await trustFactoryContract.searchByAddress(address);
        setUsersContract(contract);
        console.log("usersContract", contract);
        // const balanceContract = await trustFactoryContract.getContractBalance();
        // setBalanceContract(balanceContract.toString());
        // const balanceOwner = await trustFactoryContract.getContractBalance();
        // setBalanceOwner(balanceOwner.toString());

        setError("");
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Contract couldn't be fetched.  Please check your network.");
      }
    // setLoading(false);
  }, [trustFactoryContract]);

  useEffect(() => {
    if (provider && trustFactoryContract) {
      fetchData();
    }
  }, [provider, trustFactoryContract, fetchData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Card>
      <div className={`text-lg font-bold`}>Trust Factory Contract Info</div>
      <div>contract address : {TRUST_FACTORY_ADDRESS}</div>
      <div>number of contracts : {numOfContracts}</div>
      <div>your contract : {usersContract}</div>
      <div className={`border p-4`}>
        <div>your contract data</div>
        <div>percentage : {percentage}</div>
        <div>gigCount : {gigCount}</div>
        <div>balanceContract : {balanceContract}</div>
        <div>balanceOwner: {balanceOwner}</div>
        <div>believers : {believers}</div>
      </div>

      <Button onClick={() => handleContractData()}>get contract data</Button>
    </Card>
  );
};
