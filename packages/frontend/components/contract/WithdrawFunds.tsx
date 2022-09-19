import { useState, useCallback } from "react";
import { useContract, useSigner, useProvider } from "wagmi";
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";

import moneyRouter from "@/abis/moneyRouter.json";
import { MONEY_ROUTER_ADDRESS, NETWORK_ID } from "@/constants";

import { Button, Card, TextField } from "@/components/elements";

export const WithdrawFunds = () => {
  const { data: signerData } = useSigner();
  const provider = useProvider();

  const routerContract = useContract({
    addressOrName: MONEY_ROUTER_ADDRESS,
    contractInterface: moneyRouter.abi,
    signerOrProvider: signerData,
  });

  const [amount, setAmount] = useState("");

  const handleWithdraw = useCallback(async () => {
    try {
      const sf = await Framework.create({
        chainId: NETWORK_ID,
        provider,
      });
      const daix = await sf.loadSuperToken("fDAIx");
      console.log("daix", daix);
      const tx = await routerContract.withdrawFunds(
        daix.address,
        ethers.utils.parseEther(amount),
        {
          gasLimit: "1000000",
        }
      );

      tx.wait(1).then((res: any) => {
        console.log(res);
      });
      setAmount("");
    } catch (error) {
      console.log(error);
    }
  }, [amount]);

  return (
    <Card shadow border className={`p-6 bg-white my-4`}>
      <div className={`text-lg font-bold`}>Withdraw Funds</div>
      <TextField
        label={`withdrawFunds`}
        placeholder={`5`}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className={"mt-4"}>
        <Button onClick={() => handleWithdraw()}>withdraw funds</Button>
      </div>
    </Card>
  );
};
