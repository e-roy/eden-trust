import { FiExternalLink } from "react-icons/fi";

export interface IAddressProps {
  address?: string;
}

export const Address = ({ address }: IAddressProps) => {
  return (
    <div className={`font-medium text-slate-500 flex`}>
      {address}{" "}
      <a
        href={`https://mumbai.polygonscan.com/address/${address}`}
        target="_blank"
        rel="noreferrer"
      >
        <FiExternalLink className={`mx-2 my-1`} />
      </a>
    </div>
  );
};
