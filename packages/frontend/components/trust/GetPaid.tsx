import { useContract, useSigner } from "wagmi";

import trust from "@/abis/trust.json";

import { Button } from "@/components/elements";

export interface IGetPaidProps {
  contractAddress: string;
  refetch: () => void;
}

export const GetPaid = ({ contractAddress, refetch }: IGetPaidProps) => {
  const { data: signerData } = useSigner();

  const trustContract = useContract({
    addressOrName: contractAddress,
    contractInterface: trust.abi,
    signerOrProvider: signerData,
  });

  // console.log("trustContract", trustContract);

  const handleCreateTrust = async () => {
    try {
      const txFree = await trustContract.freeOwner({
        gasLimit: "10000000",
      });
      txFree.wait(1).then((res: any) => {
        // console.log("txFree", res);
        refetch();
      });
      const txWithdraw = await trustContract.withdraw({
        gasLimit: "10000000",
      });
      txWithdraw.wait(1).then((res: any) => {
        // console.log("txWithdraw", res);
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
