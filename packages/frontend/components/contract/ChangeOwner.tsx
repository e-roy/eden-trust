import { useState } from "react";
import { useContract, useSigner } from "wagmi";

import moneyRouter from "@/abis/moneyRouter.json";
import { MONEY_ROUTER_ADDRESS } from "@/constants";

import { Button, Card, TextField } from "@/components/elements";

export const ChangeOwner = () => {
  const { data: signerData } = useSigner();

  const routerContract = useContract({
    addressOrName: MONEY_ROUTER_ADDRESS,
    contractInterface: moneyRouter.abi,
    signerOrProvider: signerData,
  });

  const [newOwner, setNewOwner] = useState("");

  const handleChangeOwner = async () => {
    try {
      const tx = await routerContract.changeOwner(newOwner, {
        gasLimit: "1000000",
      });
      tx.wait(1).then((res: any) => {
        console.log(res);
      });
      setNewOwner("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <TextField
        label={`change owner`}
        placeholder={`0x0000000000000000000000000000000000000000`}
        value={newOwner}
        onChange={(e) => setNewOwner(e.target.value)}
      />
      <div className={"mt-4"}>
        <Button onClick={() => handleChangeOwner()}>change owner</Button>
      </div>
    </Card>
  );
};
