import { useState } from "react";
import { useContract, useSigner } from "wagmi";

import moneyRouter from "@/abis/moneyRouter.json";
import { MONEY_ROUTER_ADDRESS } from "@/constants";

import { Button, Card, TextField } from "@/components/elements";

export const AddContributor = () => {
  const { data: signerData } = useSigner();

  const routerContract = useContract({
    addressOrName: MONEY_ROUTER_ADDRESS,
    contractInterface: moneyRouter.abi,
    signerOrProvider: signerData,
  });

  const [contributor, setContributor] = useState("");

  return (
    <Card>
      <TextField
        label={`add contributor`}
        placeholder={`0x0000000000000000000000000000000000000000`}
        value={contributor}
        onChange={(e) => setContributor(e.target.value)}
      />
      <div className={"mt-4"}>
        <Button onClick={() => routerContract.addContributors(contributor)}>
          add contributor
        </Button>
      </div>
    </Card>
  );
};
