import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccount, useContract, useProvider } from "wagmi";
import trustFactory from "@/abis/trustFactory.json";
import { TRUST_FACTORY_ADDRESS } from "@/constants";
import { AiOutlineHome } from "react-icons/ai";

import { GridLayout, GridItemTwo, GridItemEight } from "@/components/layout";
import { MyContractContainer, BelieveContainer } from "@/components/containers";
import { Card } from "@/components/elements";
import { UserHeader } from "@/components/user";

const SignUpTestPage: NextPage = () => {
  const router = useRouter();

  const { id } = router.query;

  const { address } = useAccount();
  const provider = useProvider();

  const [usersContract, setUsersContract] = useState("");
  const [error, setError] = useState(false);

  const trustFactoryContract = useContract({
    addressOrName: TRUST_FACTORY_ADDRESS,
    contractInterface: trustFactory.abi,
    signerOrProvider: provider,
  });

  useEffect(() => {
    const checkData = async () => {
      try {
        const contract = await trustFactoryContract.searchByAddress(id);
        setUsersContract(contract);
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    if (provider && trustFactoryContract && id && address) {
      checkData();
    }
  }, [provider, trustFactoryContract, id, address]);

  if (!address) {
    return <div>Please connect your wallet</div>;
  }

  return (
    <GridLayout>
      <GridItemTwo>
        <Link href={`/`}>
          <span
            className={`flex font-medium text-slate-600 hover:text-slate-800 cursor-pointer`}
          >
            <AiOutlineHome size={`2rem`} />{" "}
            <span className={`pl-2 my-auto text-xl`}>Home</span>
          </span>
        </Link>
      </GridItemTwo>
      <GridItemEight>
        {error ? (
          <Card>
            <div className={`max-w-lg m-auto h-96`}>
              <UserHeader address={address} />

              <div className={`text-slate-500 py-12 text-center font-medium`}>
                <div>this user doesn't have an account</div>
                <div>or</div>
                <div>you are on the incorrect network</div>
              </div>
            </div>
          </Card>
        ) : (
          <>
            {id === address ? (
              <MyContractContainer />
            ) : (
              <BelieveContainer
                userAddress={(id as string) || ""}
                contractAddress={usersContract}
              />
            )}
          </>
        )}
      </GridItemEight>
      <GridItemTwo> </GridItemTwo>
    </GridLayout>
  );
};

export default SignUpTestPage;
