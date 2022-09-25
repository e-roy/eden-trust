// import { useEffect, useCallback, useState } from "react";
import { UserContext, Header } from "./";

// import { useAccount } from "wagmi";

// import { CeramicClient } from "@ceramicnetwork/http-client";
// import { DID } from "dids";
// import { getResolver as getKeyResolver } from "key-did-resolver";
// import { getResolver as get3IDResolver } from "@ceramicnetwork/3id-did-resolver";
// import { EthereumAuthProvider, ThreeIdConnect } from "@3id/connect";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  // const { address } = useAccount();

  // const [authenticatedCeramicInst, setAuthenticatedCeramicInst] =
  //   useState<any>();

  // const authenticateWithEthereum = useCallback(
  //   (ethereumProvider: any) => {
  //     const ceramic = new CeramicClient("https://ceramic-clay.3boxlabs.com");

  //     // Create an EthereumAuthProvider using the Ethereum provider and requested account
  //     const authProvider = new EthereumAuthProvider(
  //       ethereumProvider,
  //       address as string
  //     );
  //     // Create a ThreeIdConnect connect instance as soon as possible in your app to start loading assets
  //     const threeID = new ThreeIdConnect();

  //     const authCeramic = async () => {
  //       try {
  //         // Connect the created EthereumAuthProvider to the 3ID Connect instance so it can be used to
  //         // generate the authentication secret
  //         await threeID.connect(authProvider);

  //         const did = new DID({
  //           // Get the DID provider from the 3ID Connect instance
  //           provider: threeID.getDidProvider(),
  //           resolver: {
  //             ...get3IDResolver(ceramic),
  //             ...getKeyResolver(),
  //           },
  //         });

  //         // Authenticate the DID using the 3ID provider from 3ID Connect, this will trigger the
  //         // authentication flow using 3ID Connect and the Ethereum provider
  //         await did.authenticate();

  //         // The Ceramic client can create and update streams using the authenticated DID
  //         ceramic.did = did;

  //         // console.log(ceramic.did);

  //         setAuthenticatedCeramicInst(ceramic);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //     authCeramic();
  //   },
  //   [address]
  // );

  // useEffect(() => {
  //   if (address) {
  //     if (window.ethereum == null) {
  //       throw new Error("No injected Ethereum provider");
  //     }
  //     authenticateWithEthereum(window.ethereum);
  //   }
  // }, [address, authenticateWithEthereum]);

  // const injectContext = {
  //   currentUser: null,
  //   authenticatedCeramicInst,
  // };

  // console.log("applayout");

  return (
    // <UserContext.Provider value={injectContext}>
    <div className="flex flex-col h-screen bg-slate-100">
      <Header />
      <main className="flex-grow">{children}</main>
    </div>
    // </UserContext.Provider>
  );
};
