import { gql, useQuery } from "@apollo/client";
import { MONEY_ROUTER_ADDRESS } from "@/constants";

export const FIND_ACCOUNT = gql`
  query ($id: ID = "0x20d765573479b50d3e72580a8fb06661cb544078") {
    account(id: $id) {
      createdAtTimestamp
      createdAtBlockNumber
      isSuperApp
      updatedAtBlockNumber
      updatedAtTimestamp
      receivedTransferEvents {
        addresses
        blockNumber
        gasPrice
        id
      }
    }
  }
`;

export const GetAccountInfo = () => {
  const { loading, error, data, fetchMore } = useQuery(FIND_ACCOUNT, {
    variables: {
      request: {},
    },
  });

  if (data) console.log("data", data?.account);

  return (
    <div className={`border rounded-md my-4 p-4`}>
      <div className={`text-lg font-bold`}>Superfluid Account Info</div>
    </div>
  );
};
