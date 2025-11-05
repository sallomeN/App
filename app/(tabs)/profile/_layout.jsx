import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Your profile 👤",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="editProfile"
        options={{
          title: "Edit Profile",
          headerStyle: { backgroundColor: "black" },
          headerTitleStyle: { color: "white", fontWeight: "bold" },
          headerBackVisible: false,
        }}
      />
    </Stack>
  );
}
