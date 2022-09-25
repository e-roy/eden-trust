import { useState } from "react";
import { useContract, useSigner } from "wagmi";

import trustFactory from "@/abis/trustFactory.json";
import { TRUST_FACTORY_ADDRESS } from "@/constants";

import { Button, TextField, Loading } from "@/components/elements";

export interface ICreateTrustProps {
  refetch: () => void;
  onContractReset: (val: any) => void;
}

export const CreateTrust = ({
  refetch,
  onContractReset,
}: ICreateTrustProps) => {
  const { data: signerData } = useSigner();
  const [submitting, setSubmitting] = useState(false);

  const trustFactoryContract = useContract({
    addressOrName: TRUST_FACTORY_ADDRESS,
    contractInterface: trustFactory.abi,
    signerOrProvider: signerData,
  });

  const [percentage, setPercentage] = useState("");
  const [gigCount, setGigCount] = useState("");

  const handleCreateTrust = async () => {
    setSubmitting(true);
    try {
      const tx = await trustFactoryContract.createTrustContract(
        percentage,
        gigCount,
        {
          gasLimit: "10000000",
        }
      );
      tx.wait(1).then(() => {
        refetch();
        onContractReset(false);
      });
    } catch (error) {
      console.log(error);
      setSubmitting(false);
    }
  };

  if (submitting)
    return (
      <div className={`h-full`}>
        <Loading title={`Creating Contract...`} />
      </div>
    );

  return (
    <div className={`m-auto py-4`}>
      <div className={`text-2xl text-slate-700 font-bold text-center mb-8`}>
        Create Trust
      </div>
      <TextField
        label={`percentage to believers`}
        placeholder={`0`}
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
      />
      <TextField
        label={`total projects to complete`}
        placeholder={`0`}
        value={gigCount}
        onChange={(e) => setGigCount(e.target.value)}
      />
      <div className={"mt-4"}>
        <Button
          className={`w-full justify-center`}
          onClick={() => handleCreateTrust()}
        >
          create trust
        </Button>
      </div>
    </div>
  );
};
