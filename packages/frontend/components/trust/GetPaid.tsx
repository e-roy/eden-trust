import { useState } from "react";
import { useContract, useSigner } from "wagmi";

import { ethers } from "ethers";

import trust from "@/abis/trust.json";

import { Button } from "@/components/elements";

export interface IGetPaidProps {
  contractAddress: string;
  balanceContract: string;
}

export const GetPaid = ({
  contractAddress,
  balanceContract,
}: IGetPaidProps) => {
  const { data: signerData } = useSigner();

  const trustFactoryContract = useContract({
    addressOrName: contractAddress,
    contractInterface: trust.abi,
    signerOrProvider: signerData,
  });

  const handleCreateTrust = async () => {
    try {
      const tx = await trustFactoryContract.gettingPaid(
        ethers.utils.parseEther(balanceContract),
        // balanceContract,
        // "9999980487952045105099",
        {
          gasLimit: "10000000",
          //   value: balanceContract,
          //   value: ethers.utils.parseEther("0.5"),
        }
      );
      tx.wait(1).then((res: any) => {
        console.log(res);
      });
      //   setNewOwner("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={() => handleCreateTrust()}>withdrawl funds</Button>
    </div>
  );
};
