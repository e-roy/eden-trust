import { Card } from "../elements";
import { AddBeliever } from "@/components/trust";
import { UserHeader } from "../user";

export interface IBelieveContainerProps {
  userAddress: string;
  contractAddress?: string;
}

export const BelieveContainer = ({
  userAddress,
  contractAddress,
}: IBelieveContainerProps) => {
  return (
    <Card>
      <div className={`max-w-lg m-auto h-96 py-16`}>
        <UserHeader address={userAddress} />

        <div className={`font-medium text-slate-500 py-4 flex text-center`}>
          Believe in this person
        </div>
        {contractAddress && <AddBeliever contractAddress={contractAddress} />}
      </div>
    </Card>
  );
};
