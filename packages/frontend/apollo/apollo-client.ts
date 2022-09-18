import { ApolloClient, InMemoryCache } from "@apollo/client";

import { SUPERFLUID_MUMBAI_URL } from "@/constants";

export const apolloClient = () => {
  const apolloClient = new ApolloClient({
    uri: SUPERFLUID_MUMBAI_URL,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {},
        },
      },
    }),
  });
  return apolloClient;
};
