import { Stack } from "expo-router";

export default function PhonesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Phones 📱",
          headerStyle: {
            backgroundColor: "#FF2D87",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Phone Details",
          headerStyle: { backgroundColor: "#FF2D87" },
          headerTitleStyle: { color: "white", fontWeight: "bold" },
          headerBackVisible: false,
        }}
      />
    </Stack>
  );
}
