import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="(phones)"
        options={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            paddingTop: 5,
            backgroundColor: "#FF2D87",
            borderTopColor: "transparent",
          },
          tabBarIcon: () => (
            <MaterialIcons name="phone-iphone" size={30} color="white" />
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
            backgroundColor: "#FF4500",
            borderTopColor: "transparent",
          },
          tabBarIcon: () => (
            <FontAwesome5 name="laptop" size={24} color="white" />
          ),
        }}
      />
    </Tabs>
  );
}
