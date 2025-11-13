import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Slot, useRouter } from "expo-router";
import { ProfileProvider, useProfileContext, } from "../context/profile/profile.context";
import { getData } from "../utils/AsyncStorage";

const Initializer = () => {
  const router = useRouter();
  const { dispatch } = useProfileContext();

  useEffect(() => {
    const checkUser = async () => {
      const savedUser = await getData("currentUser");
      if (savedUser) {
        dispatch({ type: "LOGIN", payload: savedUser });
        router.replace("/(tabs)");
      } else {
        router.replace("/logIn");
      }
    };
    checkUser();
  }, []);

  return <Slot />;
};

const RootLayout = () => {
  return (
    <ProfileProvider>
      <SafeAreaProvider>
        <Initializer />
      </SafeAreaProvider>
    </ProfileProvider>
  );
};

export default RootLayout;
