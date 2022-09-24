export const NETWORK_ID = 80001 as number;
export const NETWORK_NAME = "mumbai" as string;

export const ENV_PROD = process.env.NODE_ENV === "production";
export const ENV_DEV = process.env.NODE_ENV === "development";

// export const MONEY_ROUTER_ADDRESS =
//   "0x20D765573479b50d3e72580a8fB06661cb544078" as string;

export const MONEY_ROUTER_ADDRESS =
  "0xB4B23Db28ED7F94e0D274027e8eaD3EC5aee7318" as string;

export const SUPERFLUID_MUMBAI_URL =
  "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-mumbai";

const TRUST_FACTORY_MUMBAI_ADDRESS =
  "0x8Af2FB1384DD075898341980Fc3Ba3e1b7bF9181";

const TRUST_FACTORY_LOCAL_ADDRESS =
  "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";

export const TRUST_FACTORY_ADDRESS = ENV_DEV
  ? TRUST_FACTORY_LOCAL_ADDRESS
  : TRUST_FACTORY_MUMBAI_ADDRESS;
