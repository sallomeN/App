import React, { createContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import { ProfileProvider } from "../context/profile/profile.context";

export const ThemeContext = createContext({})

const RootLayout = () => {
  return (
    <ThemeContext.Provider>
      <ProfileProvider>
        <SafeAreaProvider>
          <Slot />
        </SafeAreaProvider>
      </ProfileProvider>
    </ThemeContext.Provider>
  );
};

export default RootLayout;
