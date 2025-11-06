import { useReducer } from "react";

const initialState = {
  users: [], //ეს მასივი შეინახავს დარეგისტრირებულ მომხმარებლებს
  currentUser: null, //თავიდან მომხმარებელი არის null
};

const reducer = (state, action) => {
  if (action.type === "REGISTER") {
    const updatedUsers = [...state.users, action.payload]; //იღებს ამჟამინდელ იუზერებს და ქმნის ახალ მასივს სადაც ამატებს ამ ახალ იუზერს
    return { ...state, users: updatedUsers }; //აბრუნებს ახალ სტეიტს სადაც არის  იუზერების განახლებული მასივი
    //ამ შემთხვევაში currentUser უცვლელია იმიტორო რეგისტრაციის დროს მომხმარებელი არ ლოგინდება ავტომატურად
  }

  if (action.type === "LOGIN") {
    return { ...state, currentUser: action.payload }; //აბრუნებს ახალ სტეიტს და currentUser არი action.payload ანუ შესული იუზერი
    //ანუ ამ ფუნქციით ვეუბნებით რომ დააბრუნოს ახალი სთეითის ობიექტი სადაც ყველაფერი დაკოპირებულია და მხოლოდ currentUser ახლდება
  }

  if (action.type === "UPDATE_PROFILE") {
    const updatedUsers = state.users.map((user) => { //მეპით ვპოულობთ განახლებულს მომხმარებელს რა ანუ ჩადის ამ სთეითში, ათვალიერებს თუ იმეილები ემთხვევა მაშინ პროფილის გვერდზე განაახლებს
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
