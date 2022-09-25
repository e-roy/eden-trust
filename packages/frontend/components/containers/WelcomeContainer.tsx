import { useState } from "react";
import { Card, TextField, Button } from "../elements";
import { useRouter } from "next/router";
import { useAccount, useContract, useProvider } from "wagmi";
import { FindAllTrust } from "@/components/trust";
import { GridLayout, GridItemSix } from "@/components/layout";

import trustFactory from "@/abis/trustFactory.json";
import { TRUST_FACTORY_ADDRESS } from "@/constants";
import { UserHeader } from "../user";

export const WelcomeContainer = () => {
  const [findAddress, setFindAddress] = useState("");
  const [foundAddress, setFoundAddress] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { address } = useAccount();

  const provider = useProvider();

  const trustFactoryContract = useContract({
    addressOrName: TRUST_FACTORY_ADDRESS,
    contractInterface: trustFactory.abi,
    signerOrProvider: provider,
  });

  const handleSearch = async () => {
    if (findAddress)
      try {
        setError("");
        const contract = await trustFactoryContract.searchByAddress(
          findAddress
        );
        setFoundAddress(contract);
      } catch (error) {
        console.log(error);
        setError("This address hasn't created a contract yet.");
      }
  };

  return (
    <Card>
      <div className={`font-medium text-slate-500 pb-4 flex`}>
        Welcome to Trust Factory
      </div>
      <div className={`text-slate-500`}>
        This is a place where you can create a trust contract with a percentage
        and a gig count. You can then share the contract address with your
        friends and family. When they believe in you, they will send you a
        percentage of the contract balance. When you complete a gig, you can
        withdraw the gig count from the contract balance.
      </div>
      <div className={`mt-12`}>
        {/* <FindAllTrust /> */}

        <GridLayout>
          <GridItemSix>
            <div className={"mx-4"}>
              <div className={`h-28`}>
                {foundAddress && (
                  <div className={`text-slate-700 font-medium text-center`}>
                    <div className={``}>put trust in this person</div>
                    <Button
                      className={`w-full justify-center py-2`}
                      onClick={() => router.push(`/believe/${findAddress}`)}
                    >
                      <UserHeader address={findAddress} />
                    </Button>
                  </div>
                )}
                {error && <div className={`text-red-500`}>{error}</div>}
              </div>

              <TextField
                label={`search by address`}
                placeholder={`0x0000000000000000000000000000000000000000`}
                value={findAddress}
                onChange={(e) => setFindAddress(e.target.value)}
              />
              <div className={"mt-4"}>
                <Button
                  className={`w-full justify-center`}
                  onClick={() => handleSearch()}
                >
                  search address
                </Button>
              </div>
            </div>
          </GridItemSix>
          <GridItemSix>
            <div className={"mx-4"}>
              <Button
                className={"w-full my-8"}
                onClick={() => router.push(`/believe/${address}`)}
              >
                <div className={"w-full justify-center my-4"}>
                  <div className={"m-auto w-full flex justify-center my-4"}>
                    <UserHeader address={address} />
                  </div>
                  <div className={`text-2xl text-slate-700 font-medium`}>
                    view your trust
                  </div>
                </div>
              </Button>
            </div>
          </GridItemSix>
        </GridLayout>
      </div>
    </Card>
  );
};
