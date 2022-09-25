import { Card } from "../elements";
import { useEffect, useState, useCallback } from "react";
import { useContract, useProvider } from "wagmi";
import { useRouter } from "next/router";
import { CreateTrust } from "@/components/trust";

import trustFactory from "@/abis/trustFactory.json";
import { TRUST_FACTORY_ADDRESS } from "@/constants";
import { TrustInfo } from "@/components/trust";

export const MyContractContainer = () => {
  const router = useRouter();

  const { id } = router.query;

  const [usersContract, setUsersContract] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const provider = useProvider();

  const trustFactoryContract = useContract({
    addressOrName: TRUST_FACTORY_ADDRESS,
    contractInterface: trustFactory.abi,
    signerOrProvider: provider,
  });

  const fetchData = useCallback(async () => {
    if (loading)
      try {
        const contract = await trustFactoryContract.searchByAddress(id);
        setUsersContract(contract);
        setError("");
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Contract couldn't be fetched.  Please check your network.");
      }
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
      {usersContract === "0x0000000000000000000000000000000000000000" ? (
        <CreateTrust />
      ) : (
        <TrustInfo usersContract={usersContract} />
      )}
    </Card>
  );
};