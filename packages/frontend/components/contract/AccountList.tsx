import { useState } from "react";
import { useContract, useSigner } from "wagmi";

import moneyRouter from "@/abis/moneyRouter.json";
import { MONEY_ROUTER_ADDRESS } from "@/constants";

import { Button, Card, TextField } from "@/components/elements";

export const AccountList = () => {
  const { data: signerData } = useSigner();

  const routerContract = useContract({
    addressOrName: MONEY_ROUTER_ADDRESS,
    contractInterface: moneyRouter.abi,
    signerOrProvider: signerData,
  });

  const [address, setAddress] = useState("");
  const [isTrue, setIsTrue] = useState("");

  const handleCheckAddress = async () => {
    try {
      const result = await routerContract.accountList(address);
      //   console.log("result", result);
      setIsTrue(result ? "true" : "false");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <div>returns : {isTrue}</div>
      <TextField
        label={`check address`}
        placeholder={`0x0000000000000000000000000000000000000000`}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <div className={"mt-4"}>
        <Button onClick={() => handleCheckAddress()}>
          check address on accountList
        </Button>
      </div>
    </Card>
  );
};
