import { useState } from "react";
import { useContract, useSigner } from "wagmi";

import { ethers } from "ethers";

import trust from "@/abis/trust.json";

import { Button } from "@/components/elements";

export interface IGetPaidProps {
  contractAddress: string;
  balanceContract: string;
  refetch: () => void;
}

export const GetPaid = ({
  contractAddress,
  balanceContract,
  refetch,
}: IGetPaidProps) => {
  const { data: signerData } = useSigner();

  const trustContract = useContract({
    addressOrName: contractAddress,
    contractInterface: trust.abi,
    signerOrProvider: signerData,
  });

  console.log("trustContract", trustContract);

  const handleCreateTrust = async () => {
    try {
      const tx = await trustContract.freeOwner({
        gasLimit: "10000000",
        // value: ethers.utils.parseEther("50"),
      });
      tx.wait(1).then((res: any) => {
        console.log(res);
        refetch();
      });
      //   setNewOwner("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`my-4`}>
      <Button
        className={`w-full justify-center`}
        onClick={() => handleCreateTrust()}
      >
        withdraw funds
      </Button>
    </div>
  );
};
