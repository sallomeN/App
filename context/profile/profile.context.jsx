import { createContext, useContext } from "react";
import { useProfileDetails } from "./profile.hooks";

const profileContext = createContext({});

export const ProfileProvider = ({ children }) => {
  const { profileDetails, dispatch } = useProfileDetails();
  const currentUser = profileDetails.currentUser;
  const users = profileDetails.users;

  return (
    <profileContext.Provider value={{ currentUser, users, dispatch }}>
      {children}
    </profileContext.Provider>
  );
};

export const useProfileContext = () => useContext(profileContext);
