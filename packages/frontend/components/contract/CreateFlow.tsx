import { useState, useCallback } from "react";
import { useContract, useSigner, useProvider } from "wagmi";
import { Framework } from "@superfluid-finance/sdk-core";
// import { ethers } from "ethers";

import moneyRouter from "@/abis/moneyRouter.json";
import { MONEY_ROUTER_ADDRESS, NETWORK_ID } from "@/constants";

import { Button, Card, TextField } from "@/components/elements";

export const CreateFlow = () => {
  const { data: signerData } = useSigner();
  const provider = useProvider();

  const routerContract = useContract({
    addressOrName: MONEY_ROUTER_ADDRESS,
    contractInterface: moneyRouter.abi,
    signerOrProvider: signerData,
  });

  // const [flowAmount, setFlowAmount] = useState("");
  const [account, setAccount] = useState("");

  const handleCreateFlow = async () => {
    try {
      const sf = await Framework.create({
        chainId: NETWORK_ID,
        provider,
      });
      const daix = await sf.loadSuperToken("fDAIx");
      //   console.log("daix", daix);
      const tx = await routerContract.createFlowFromContract(
        daix.address,
        account,
        // "0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f",
        "385802469135802",
        // ethers.utils.parseEther(flowAmount),
        {
          gasLimit: "1000000",
        }
      );

      tx.wait(1).then((res: any) => {
        console.log(res);
      });
      // setFlowAmount("");
      setAccount("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <div className={`text-lg font-bold`}>Create Flow</div>
      <TextField
        label={`receiver's address`}
        placeholder={`0x0000000000000000000000000000000000000000`}
        value={account}
        onChange={(e) => setAccount(e.target.value)}
      />
      <div className={"mt-4"}>
        <Button onClick={() => handleCreateFlow()}>create flow</Button>
      </div>
    </Card>
  );
};
