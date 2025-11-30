import { useReducer } from "react";

const initialState = {
  users: [], //ეს მასივი შეინახავს დარეგისტრირებულ მომხმარებლებს
  currentUser: null, //თავიდან მომხმარებელი არის null
  laptops: [],
  phones: []
};


const reducer = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return { ...state, users: [...state.users, action.payload] };

    case "LOGIN":
      return { ...state, currentUser: action.payload };

    case "LOGOUT":
      return { ...state, currentUser: null };

    case "UPDATE_PROFILE":
      const updatedUsers = state.users.map((user) =>
        user.email === state.currentUser.email ? action.payload : user
      );
      return { ...state, users: updatedUsers, currentUser: action.payload };

    case "SET_LAPTOPS":
      return { ...state, laptops: action.payload };

    case "SET_PHONES":
      return { ...state, phones: action.payload };

    default:
      return state;
  }
};


export const useProfileDetails = () => {
  const [profileDetails, dispatch] = useReducer(reducer, initialState);
  return { profileDetails, dispatch };
};
