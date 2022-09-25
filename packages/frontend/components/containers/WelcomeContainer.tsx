import { useState } from "react";
import { Card, TextField, Button } from "../elements";
import { useRouter } from "next/router";
import { useAccount, useContract, useProvider } from "wagmi";

import trustFactory from "@/abis/trustFactory.json";
import { TRUST_FACTORY_ADDRESS } from "@/constants";

export const WelcomeContainer = () => {
  const [findAddress, setFindAddress] = useState("");
  const [foundAddress, setFoundAddress] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { address } = useAccount();

  const provider = useProvider();

  const trustFactoryContract = useContract({
    addressOrName: TRUST_FACTORY_ADDRESS,
    contractInterface: trustFactory.abi,
    signerOrProvider: provider,
  });

  const handleSearch = async () => {
    if (findAddress)
      try {
        setError("");
        const contract = await trustFactoryContract.searchByAddress(
          findAddress
        );
        setFoundAddress(contract);
      } catch (error) {
        console.log(error);
        setError("This address hasn't created a contract yet.");
      }
  };

  return (
    <Card>
      <div className={`font-medium text-slate-500 pb-4 flex`}>
        Welcome to Trust Factory
      </div>
      <div className={`text-slate-500`}>
        This is a place where you can create a trust contract with a percentage
        and a gig count. You can then share the contract address with your
        friends and family. When they believe in you, they will send you a
        percentage of the contract balance. When you complete a gig, you can
        withdraw the gig count from the contract balance.
      </div>
      <div className={`mt-12`}>
        {foundAddress && (
          <div className={"mt-4"}>
            <Button onClick={() => router.push(`/believe/${findAddress}`)}>
              put trust in this person
            </Button>
          </div>
        )}
        {error && <div className={`text-red-500`}>{error}</div>}
        <TextField
          label={`search address`}
          placeholder={`0x0000000000000000000000000000000000000000`}
          value={findAddress}
          onChange={(e) => setFindAddress(e.target.value)}
        />
        <div className={"mt-4"}>
          <Button onClick={() => handleSearch()}>search address</Button>
        </div>
      </div>
      <div className={`mt-12`}>
        <div className={"mt-4"}>
          <Button onClick={() => router.push(`/believe/${address}`)}>
            see your trust
          </Button>
        </div>
      </div>
    </Card>
  );
};
