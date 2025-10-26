import { Stack } from "expo-router";

export default function LaptopsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Laptops 💻",
          headerStyle: {
            backgroundColor: "#FF4500",
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
          title: "Laptop Details",
          headerStyle: { backgroundColor: "#FF4500" },
          headerTitleStyle: { color: "white", fontWeight: "bold" },
          headerBackVisible: false,
        }}
      />
    </Stack>
  );
}
