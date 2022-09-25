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
        id
        addresses
        value
        token
      }
      sentTransferEvents {
        addresses
        id
        value
        token
      }
      publishedIndexes {
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
    <Card>
      <div className={`text-lg font-bold`}>Superfluid Account Info</div>
      <div>createdAtBlockNumber : {data?.account.createdAtBlockNumber}</div>
      <div>createdAtTimestamp : {data?.account.createdAtTimestamp}</div>
      <div>isSuperApp : {data?.account.isSuperApp ? "true" : "false"}</div>
      <div>updatedAtBlockNumber : {data?.account.updatedAtBlockNumber}</div>
      <div>updatedAtTimestamp : {data?.account.updatedAtTimestamp}</div>

      {data?.account.receivedTransferEvents.map((event: any, index: number) => (
        <div key={index} className={`border p-4 rounded-lg my-4`}>
          <div>Received Transfer Event</div>
          <div>id : {event.id}</div>
          <div>token : {event.token}</div>
          <div>value : {event.value}</div>
          <div>
            addresses :
            {event.addresses.map((address: string, index: number) => (
              <div className={"border p-2"} key={index}>
                {address}
              </div>
            ))}
          </div>
        </div>
      ))}
    </Card>
  );
};
