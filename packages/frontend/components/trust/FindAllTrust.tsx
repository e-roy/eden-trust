import { useRouter } from "next/router";
import { useAccount, useContract, useProvider } from "wagmi";
import trustFactory from "@/abis/trustFactory.json";
import { TRUST_FACTORY_ADDRESS } from "@/constants";
import { useCallback, useEffect, useState } from "react";

export const FindAllTrust = () => {
  const provider = useProvider();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const trustFactoryContract = useContract({
    addressOrName: TRUST_FACTORY_ADDRESS,
    contractInterface: trustFactory.abi,
    signerOrProvider: provider,
  });

  const fetchData = useCallback(async () => {
    console.log("trustFactoryContract", trustFactoryContract);
    if (loading)
      try {
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

  return (
    <div>
      <div>FindAllTrust</div>
    </div>
  );
};
