import { Card } from "../elements";
import { AddBeliever } from "@/components/trust";

export interface IBelieveContainerProps {
  contractAddress?: string;
}

export const BelieveContainer = ({
  contractAddress,
}: IBelieveContainerProps) => {
  return (
    <Card>
      <div className={`font-medium text-slate-500 pb-4 flex`}>
        Believe in this person
      </div>
      {contractAddress && <AddBeliever contractAddress={contractAddress} />}
    </Card>
  );
};
