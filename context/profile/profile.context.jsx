import { createContext, useContext } from "react";
import { useProfileDetails } from "./profile.hooks";

const profileContext = createContext({});

export const ProfileProvider = ({ children }) => {
  const { profileDetails, dispatch } = useProfileDetails();
  const { currentUser, users, phones, laptops } = profileDetails;

  return (
    <profileContext.Provider
      value={{
        currentUser,
        users,
        phones,
        laptops,
        dispatch,
      }}
    >
      {children}
    </profileContext.Provider>
  );
};

export const useProfileContext = () => useContext(profileContext);
