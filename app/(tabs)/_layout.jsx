import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <Tabs
      safeAreaInsets={{ bottom: 0 }}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { elevation: 0 },
        headerStatusBarHeight: 0,
      }}
    >
      <Tabs.Screen
        name="(phones)"
        options={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            paddingTop: 5,
            backgroundColor: "#F0F8FF",
            borderTopColor: "transparent",
          },
          tabBarIcon: () => (
            <MaterialIcons name="phone-iphone" size={30} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="laptops"
        options={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            paddingTop: 5,
            backgroundColor: "#C0C0C0",
            borderTopColor: "transparent",
          },
          tabBarIcon: () => (
            <FontAwesome5 name="laptop" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            paddingTop: 5,
            backgroundColor: "#D3D3D3",
            borderTopColor: "transparent",
          },
          tabBarIcon: () => <FontAwesome name="user" size={28} color="black" />,
        }}
      />
    </Tabs>
  );
}
