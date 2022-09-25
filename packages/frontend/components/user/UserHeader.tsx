import { Avatar, svgAvatarGenerator } from "../elements";

export interface IUserHeaderProps {
  address?: string;
}

export const UserHeader = ({ address }: IUserHeaderProps) => {
  // function to shorten the address
  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className={`flex`}>
      <Avatar
        src={svgAvatarGenerator(address, {
          dataUri: true,
        })}
      />
      <div className={`pl-4 text-slate-500 font-medium`}>
        {shortenAddress(address || "")}
      </div>
    </div>
  );
};
