import { useState } from "react";
import { useContract, useSigner } from "wagmi";

import moneyRouter from "@/abis/moneyRouter.json";
import { MONEY_ROUTER_ADDRESS } from "@/constants";

import { Button, Card, TextField } from "@/components/elements";

export const AllowAccount = () => {
  const { data: signerData } = useSigner();

  const routerContract = useContract({
    addressOrName: MONEY_ROUTER_ADDRESS,
    contractInterface: moneyRouter.abi,
    signerOrProvider: signerData,
  });

  const [account, setAccount] = useState("");

  return (
    <Card shadow border className={`p-6 bg-white my-4`}>
      <TextField
        label={`allow account`}
        placeholder={`0x0000000000000000000000000000000000000000`}
        value={account}
        onChange={(e) => setAccount(e.target.value)}
      />
      <div className={"mt-4"}>
        <Button onClick={() => routerContract.allowAccount(account)}>
          allow account
        </Button>
      </div>
    </Card>
  );
};
