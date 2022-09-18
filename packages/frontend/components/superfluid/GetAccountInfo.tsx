import { gql, useQuery } from "@apollo/client";
import { MONEY_ROUTER_ADDRESS } from "@/constants";
import { Card } from "@/components/elements";

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
      request: {
        id: "0x20d765573479b50d3e72580a8fb06661cb544078",
      },
    },
  });

  if (data) console.log("data", data?.account);

  return (
    <Card shadow border className={`p-6 bg-white my-4`}>
      <div className={`text-lg font-bold`}>Superfluid Account Info</div>
    </Card>
  );
};
