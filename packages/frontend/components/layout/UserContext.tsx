import { createContext } from "react";

type userProfile = any;
type ceramicClient = any;

type UserContextType = {
  currentUser?: userProfile;
  authenticatedCeramicInst?: ceramicClient;
};

export const UserContext = createContext<UserContextType>({
  currentUser: undefined,
  authenticatedCeramicInst: undefined,
});
