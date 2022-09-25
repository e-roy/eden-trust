import { useState } from "react";
import { useContract, useSigner } from "wagmi";
import { ethers } from "ethers";

import trust from "@/abis/trust.json";

import { Button, Card, TextField } from "@/components/elements";

export interface IAddBelieverProps {
  contractAddress: string;
}

export const AddBeliever = ({ contractAddress }: IAddBelieverProps) => {
  const [amount, setAmount] = useState("");
  const { data: signerData } = useSigner();

  const trustContract = useContract({
    addressOrName: "0x440C0fCDC317D69606eabc35C0F676D1a8251Ee1",
    contractInterface: trust.abi,
    signerOrProvider: signerData,
  });

  const handleCreateTrust = async () => {
    try {
      const tx = await trustContract.AddBeliever({
        gasLimit: "10000000",
        value: ethers.utils.parseEther(amount),
      });
      tx.wait(1).then((res: any) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <TextField
        label={`amount`}
        placeholder={`0`}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className={"mt-4"}>
        <Button onClick={() => handleCreateTrust()}>add believer</Button>
      </div>
      <div className={"mt-4"}></div>
    </div>
  );
};
