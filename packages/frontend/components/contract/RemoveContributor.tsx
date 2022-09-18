import { useState } from "react";
import { useContract, useSigner } from "wagmi";

import moneyRouter from "@/abis/moneyRouter.json";
import { MONEY_ROUTER_ADDRESS } from "@/constants";

import { Button, Card, TextField } from "@/components/elements";

export const RemoveContributor = () => {
  const { data: signerData } = useSigner();

  const routerContract = useContract({
    addressOrName: MONEY_ROUTER_ADDRESS,
    contractInterface: moneyRouter.abi,
    signerOrProvider: signerData,
  });

  const [contributor, setContributor] = useState("");

  const handleRemoveContributor = async () => {
    try {
      const tx = await routerContract.removeAccount(contributor, {
        gasLimit: "1000000",
      });
      tx.wait(1).then((res: any) => {
        console.log(res);
      });
      setContributor("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card shadow border className={`p-6 bg-white my-4`}>
      <TextField
        label={`remove contributor`}
        placeholder={`0x0000000000000000000000000000000000000000`}
        value={contributor}
        onChange={(e) => setContributor(e.target.value)}
      />
      <div className={"mt-4"}>
        <Button onClick={() => handleRemoveContributor()}>
          remove contributor
        </Button>
      </div>
    </Card>
  );
};
