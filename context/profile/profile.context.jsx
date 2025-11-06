import { createContext, useContext } from "react";
import { useProfileDetails } from "./profile.hooks";

const profileContext = createContext({});

export const ProfileProvider = ({ children }) => {
  const { profileDetails, dispatch } = useProfileDetails();

  return (
    <profileContext.Provider value={{ profileDetails, dispatch }}>
      {children}
    </profileContext.Provider>
  );
};

export const useProfileContext = () => useContext(profileContext);
