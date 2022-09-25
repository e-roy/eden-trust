import { useState } from "react";
import { useContract, useSigner } from "wagmi";
import { ethers } from "ethers";

import trust from "@/abis/trust.json";

import { Button, TextField, Loading } from "@/components/elements";

export interface IProjectCompletedProps {
  contractAddress: string;
  refetch: () => void;
}

export const ProjectCompleted = ({
  contractAddress,
  refetch,
}: IProjectCompletedProps) => {
  const [amount, setAmount] = useState("");
  const { data: signerData } = useSigner();
  const [submitting, setSubmitting] = useState(false);

  const trustContract = useContract({
    addressOrName: contractAddress,
    contractInterface: trust.abi,
    signerOrProvider: signerData,
  });

  const handleCreateTrust = async () => {
    setSubmitting(true);
    try {
      const tx = await trustContract.gettingPaid(
        ethers.utils.parseEther(amount),
        {
          gasLimit: "10000000",
          value: ethers.utils.parseEther(amount),
        }
      );
      tx.wait(1).then(() => {
        setSubmitting(false);
        refetch();
        setAmount("");
      });
    } catch (error) {
      console.log(error);
      setSubmitting(false);
    }
  };

  if (submitting)
    return (
      <div className={`m-auto h-full py-8`}>
        <Loading title={`Completing Project...`} />
      </div>
    );

  return (
    <div>
      <TextField
        label={`amount`}
        placeholder={`0`}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className={"mt-4"}>
        <Button
          className={`w-full justify-center`}
          onClick={() => handleCreateTrust()}
        >
          Complete Project
        </Button>
      </div>
      <div className={"mt-4"}></div>
    </div>
  );
};
