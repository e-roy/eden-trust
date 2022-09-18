import { useState } from "react";
import { useContract, useSigner } from "wagmi";

import moneyRouter from "@/abis/moneyRouter.json";
import { MONEY_ROUTER_ADDRESS } from "@/constants";

import { Button, TextField } from "@/components/elements";

export const AddContributor = () => {
  const { data: signerData } = useSigner();

  const routerContract = useContract({
    addressOrName: MONEY_ROUTER_ADDRESS,
    contractInterface: moneyRouter.abi,
    signerOrProvider: signerData,
  });

  const [contributor, setContributor] = useState("");

  return (
    <div className={`border rounded-md my-4 p-4`}>
      <TextField
        label={`add contributor`}
        value={contributor}
        onChange={(e) => setContributor(e.target.value)}
      />
      <div className={"mt-4"}>
        <Button onClick={() => routerContract.addContributors(contributor)}>
          add contributor
        </Button>
      </div>
    </div>
  );
};
