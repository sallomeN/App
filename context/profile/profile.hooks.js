import { useReducer } from "react";

const initialState = {
  name: "Salome",
  lastName: "Nozadze",
  email: "nozadzesalome763@gmail.com",
  phone: "557 496 212",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
      ...state, 
     [action.fieldName]: action.value 
    };
  }
}

export const useProfileDetails = () => {
    const [profileDetails, dispatch] = useReducer(reducer, initialState);
    return { profileDetails, dispatch };
}