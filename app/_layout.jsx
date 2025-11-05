import React, { createContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import { ProfileProvider } from "../context/profile/profile.context";



const RootLayout = () => {
  return (
      <ProfileProvider>
        <SafeAreaProvider>
          <Slot />
        </SafeAreaProvider>
      </ProfileProvider>
  );
};

export default RootLayout;
