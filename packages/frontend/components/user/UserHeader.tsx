import { Avatar, svgAvatarGenerator } from "../elements";
// import { useEnsName, useEnsResolver } from "wagmi";

export interface IUserHeaderProps {
  address?: string;
}

export const UserHeader = ({ address }: IUserHeaderProps) => {
  // const { data, isError, isLoading } = useEnsName({
  //   address: address,
  //   chainId: 1,
  // });
  // console.log(address);

  // console.log("data", data);
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
