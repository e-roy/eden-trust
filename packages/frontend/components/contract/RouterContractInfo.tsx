import { useEffect, useState, useCallback } from "react";
import { useContract, useProvider } from "wagmi";

import moneyRouter from "@/abis/moneyRouter.json";
import { MONEY_ROUTER_ADDRESS } from "@/constants";

import { Button, Card } from "@/components/elements";

export const RouterContractInfo = () => {
  const [accountOwner, setAccountOwner] = useState("");
  const [totalContributors, setTotalContributors] = useState("");
  const [contractBalance, setContractBalance] = useState("");
  const [allContributors, setAllContributors] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const provider = useProvider();

  // We only need to add function to our function like
  // addOwner, add Contributor, addStream and other such function we define in our smart contract

  const routerContract = useContract({
    addressOrName: MONEY_ROUTER_ADDRESS,
    contractInterface: moneyRouter.abi,
    signerOrProvider: provider,
  });

  const fetchData = useCallback(async () => {
    console.log("routerContract", routerContract);
    if (loading)
      try {
        const owner = await routerContract.owner();
        setAccountOwner(owner);
        const getBalance = await routerContract.getBalance();
        setContractBalance(getBalance.toString());
        const getTotalNumberOfContributors =
          await routerContract.getTotalNumberOfContributors();
        setTotalContributors(getTotalNumberOfContributors.toString());
        for (let i = 0; i < getTotalNumberOfContributors; i++) {
          const contributor = await routerContract.contributors(i);
          setAllContributors((prev: any) => [...prev, contributor]);
        }
        setError("");
      } catch (error) {
        setError("Contract couldn't be fetched.  Please check your network.");
      }
    setLoading(false);
  }, [routerContract]);

  useEffect(() => {
    if (provider && routerContract) {
      fetchData();
    }
  }, [provider, routerContract, fetchData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Card shadow border className={`p-6 bg-white my-4`}>
      <div className={`text-lg font-bold`}>Router Contract Info</div>
      <div>contract address : {MONEY_ROUTER_ADDRESS}</div>
      <span>owner address : {accountOwner}</span>
      <div>total contributors : {totalContributors}</div>
      <div>contract balance : {contractBalance}</div>
      {/* {allContributors?.map((contributor: any, index: number) => (
        <div key={index}>
          <span>contributor address : {contributor}</span>
        </div>
      ))} */}

      <Button onClick={() => fetchData()}>Refresh</Button>
    </Card>
  );
};
