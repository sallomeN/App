import { Stack } from "expo-router";

export default function LaptopsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Laptops",
          headerStyle: {
            backgroundColor: "#C0C0C0",
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
          title: "Laptop Details",
          headerStyle: { backgroundColor: "#C0C0C0" },
          headerTitleStyle: { color: "#1B1B1B", fontWeight: "bold" },
          headerBackVisible: false,
        }}
      />
    </Stack>
  );
}
