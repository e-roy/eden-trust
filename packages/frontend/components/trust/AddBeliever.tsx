import { useState } from "react";
import { useContract, useSigner } from "wagmi";
import { ethers } from "ethers";

import trust from "@/abis/trust.json";

import { Button, TextField, Loading } from "@/components/elements";

export interface IAddBelieverProps {
  contractAddress: string;
}

export const AddBeliever = ({ contractAddress }: IAddBelieverProps) => {
  const [amount, setAmount] = useState("");
  const { data: signerData } = useSigner();
  const [submitting, setSubmitting] = useState(false);
  const [isBeliever, setIsBeliever] = useState(false);

  const trustContract = useContract({
    addressOrName: contractAddress,
    contractInterface: trust.abi,
    signerOrProvider: signerData,
  });

  const handleCreateTrust = async () => {
    setSubmitting(true);
    try {
      const tx = await trustContract.AddBeliever({
        gasLimit: "10000000",
        value: ethers.utils.parseEther(amount),
      });
      tx.wait(1).then(() => {
        setIsBeliever(true);
        setSubmitting(false);
      });
    } catch (error) {
      console.log(error);
      setSubmitting(false);
    }
  };

  if (submitting)
    return (
      <div className={`m-auto h-full`}>
        <Loading title={`Staking Contract...`} />
      </div>
    );

  if (isBeliever)
    return (
      <div className={`m-auto h-full`}>
        <div
          className={`text-center pt-20 font-medium text-2xl text-slate-700`}
        >
          Thank you for believing in this person!!!
        </div>
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
          Be a Believer
        </Button>
      </div>
      <div className={"mt-4"}></div>
    </div>
  );
};
