import { Stack } from "expo-router";

export default function PhonesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Phones",
          headerStyle: {
            backgroundColor: "#F0F8FF",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "black",
          },
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Phone Details",
          headerStyle: { backgroundColor: "#F0F8FF" },
          headerTitleStyle: { color: "black", fontWeight: "bold" },
          headerBackVisible: false,
        }}
      />
    </Stack>
  );
}
