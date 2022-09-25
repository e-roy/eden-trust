import { Card, svgAvatarGenerator, Avatar } from "../elements";
import { UserHeader } from "@/components/user";
import { useEffect, useState, useCallback } from "react";
import { useContract, useProvider, useAccount } from "wagmi";
import { useRouter } from "next/router";
import { CreateTrust } from "@/components/trust";

import trustFactory from "@/abis/trustFactory.json";
import { TRUST_FACTORY_ADDRESS } from "@/constants";
import { TrustInfo } from "@/components/trust";

export const MyContractContainer = () => {
  const router = useRouter();
  const { address } = useAccount();

  const { id } = router.query;

  const [usersContract, setUsersContract] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [contractCompleted, setContractCompleted] = useState(false);
  const provider = useProvider();

  useEffect(() => {
    if (contractCompleted) {
      console.log("contractCompleted", contractCompleted);
      setUsersContract("");
    }
  }, [contractCompleted]);

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

  const reFetchData = useCallback(async () => {
    try {
      const contract = await trustFactoryContract.searchByAddress(id);
      setUsersContract(contract);
      setError("");
    } catch (error) {
      console.log(error);
      setError("Contract couldn't be fetched.  Please check your network.");
    }
  }, [trustFactoryContract]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Card>
      <div className={`max-w-lg m-auto h-96`}>
        <UserHeader address={address} />
        {usersContract === "0x0000000000000000000000000000000000000000" ||
        contractCompleted ? (
          <CreateTrust
            refetch={reFetchData}
            onContractReset={(val) => setContractCompleted(val)}
          />
        ) : (
          <TrustInfo
            usersContract={usersContract}
            onContractComplete={(val) => setContractCompleted(val)}
          />
        )}
      </div>
    </Card>
  );
};
