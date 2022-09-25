import { useState } from "react";
import { useContract, useSigner } from "wagmi";

import trustFactory from "@/abis/trustFactory.json";
import { TRUST_FACTORY_ADDRESS } from "@/constants";

import { Button, TextField } from "@/components/elements";

export const CreateTrust = () => {
  const { data: signerData } = useSigner();

  const trustFactoryContract = useContract({
    addressOrName: TRUST_FACTORY_ADDRESS,
    contractInterface: trustFactory.abi,
    signerOrProvider: signerData,
  });

  const [percentage, setPercentage] = useState("");
  const [gigCount, setGigCount] = useState("");

  const handleCreateTrust = async () => {
    try {
      const tx = await trustFactoryContract.createTrustContract(
        percentage,
        gigCount,
        {
          gasLimit: "10000000",
        }
      );
      tx.wait(1).then((res: any) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className={`text-2xl text-slate-700 font-bold text-center mb-8`}>
        Create Trust
      </div>
      <TextField
        label={`percentage`}
        placeholder={`percentage`}
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
      />
      <TextField
        label={`gigCount`}
        placeholder={`gigCount`}
        value={gigCount}
        onChange={(e) => setGigCount(e.target.value)}
      />
      <div className={"mt-4"}>
        <Button onClick={() => handleCreateTrust()}>create trust</Button>
      </div>
    </div>
  );
};
