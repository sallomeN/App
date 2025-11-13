import { useReducer } from "react";

const initialState = {
  users: [], //ეს მასივი შეინახავს დარეგისტრირებულ მომხმარებლებს
  currentUser: null, //თავიდან მომხმარებელი არის null
};


const reducer = (state, action) => {
  if (action.type === "REGISTER") {
    const updatedUsers = [...state.users, action.payload];
    return { ...state, users: updatedUsers };
  }

  if (action.type === "LOGIN") {
    return { ...state, currentUser: action.payload };
  }

  if (action.type === "LOGOUT") {
    return { ...state, currentUser: null };
  }

  if (action.type === "UPDATE_PROFILE") {
    const updatedUsers = state.users.map((user) => {
      if (user.email === state.currentUser.email) {
        return action.payload;
      }
      return user;
    });
    return { ...state, users: updatedUsers, currentUser: action.payload };
  }

  return state;
};

export const useProfileDetails = () => {
  const [profileDetails, dispatch] = useReducer(reducer, initialState);
  return { profileDetails, dispatch };
};
