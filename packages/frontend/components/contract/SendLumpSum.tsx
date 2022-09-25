import { useState, useCallback } from "react";
import {
  useContract,
  useSigner,
  useProvider,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";

import moneyRouter from "@/abis/moneyRouter.json";
import { MONEY_ROUTER_ADDRESS, NETWORK_ID } from "@/constants";

import { Button, Card, TextField } from "@/components/elements";

export const SendLumpSum = () => {
  const { data: signerData } = useSigner();
  const provider = useProvider();

  const routerContract = useContract({
    addressOrName: MONEY_ROUTER_ADDRESS,
    contractInterface: moneyRouter.abi,
    signerOrProvider: signerData,
  });

  const { config } = usePrepareContractWrite({
    addressOrName: MONEY_ROUTER_ADDRESS,
    contractInterface: moneyRouter.abi,
    functionName: "sendLumpSumToContract",
    args: [
      "0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f",
      ethers.utils.parseEther("5"),
      {
        gasLimit: "1000000",
      },
    ],
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  // console.log("data", data);
  // console.log("isLoading", isLoading);
  // console.log("isSuccess", isSuccess);

  const [lumpSum, setLumpSum] = useState("");

  const handleSendLumpSum = useCallback(async () => {
    try {
      const sf = await Framework.create({
        chainId: NETWORK_ID,
        provider,
      });
      const daix = await sf.loadSuperToken("fDAIx");
      // console.log("daix", daix);
      const tx = await routerContract.sendLumpSumToContract(
        daix.address,
        // ethers.utils.parseEther(lumpSum),
        ethers.utils.parseEther("5"),
        {
          gasLimit: "1000000",
        }
      );

      tx.wait(1).then((res: any) => {
        console.log(res);
      });
      setLumpSum("");
    } catch (error) {
      console.log(error);
    }
  }, [lumpSum]);

  return (
    <Card>
      <div className={`text-lg font-bold`}>Send Lump Sum</div>
      <TextField
        label={`send lump sum`}
        placeholder={`5`}
        value={lumpSum}
        onChange={(e) => setLumpSum(e.target.value)}
      />
      <div className={"mt-4"}>
        <Button onClick={() => handleSendLumpSum()}>send lump sum</Button>
      </div>
    </Card>
  );
};
