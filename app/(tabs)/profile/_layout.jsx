import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Your profile",
          headerStyle: {
            backgroundColor: "#D3D3D3",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "black",
          },
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="editProfile"
        options={{
          title: "Edit Profile",
          headerStyle: { backgroundColor: "#D3D3D3" },
          headerTitleStyle: { color: "black", fontWeight: "bold" },
          headerBackVisible: false,
        }}
      />
    </Stack>
  );
}
