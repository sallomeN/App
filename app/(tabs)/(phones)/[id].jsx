import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
const phones = [
  {
    id: "1",
    name: "iPhone 15",
    price: "$999",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "black",
    nameColor: "white",
    linkColor: "#FF2D87",
  },
  {
    id: "2",
    name: "Samsung Galaxy A22",
    price: "$680 !!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "black",
    nameColor: "white",
    linkColor: "#FF2D87",
  },
  {
    id: "3",
    name: "Google Pixel 9",
    price: "$790",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "black",
    nameColor: "white",
    linkColor: "#FF2D87",
  },
  {
    id: "4",
    name: "Lenovo",
    price: "$699",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "black",
    nameColor: "white",
    linkColor: "#FF2D87",
  },
  {
    id: "5",
    name: "Nokia Edge 5G",
    price: "$650",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis explicabo.",
    background: "black",
    nameColor: "white",
    linkColor: "#FF2D87",
  },
  {
    id: "6",
    name: "Huawei Nova 12",
    price: "$720",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "black",
    nameColor: "white",
    linkColor: "#FF2D87",
  },
  {
    id: "7",
    name: "OnePlus 12",
    price: "$850",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "black",
    nameColor: "white",
    linkColor: "#FF2D87",
  },
];

export default function PhoneDetails() {
  const { id, name, price, description } = useLocalSearchParams();
  const router = useRouter();
  const canGoBack = router.canGoBack();
  const phone = phones.find((item) => item.id === id);

  useEffect(() => {
    if (phone === undefined) {
      router.push("/not-found");
    }
  }, [id]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.description}>{description}</Text>

        {canGoBack && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backText}>⬅️ Go Back</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("/10")}
        >
          <Text style={styles.backText}>Go to wrong screen</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF2D87",
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  price: {
    color: "#FFD700",
    fontSize: 22,
    marginVertical: 10,
  },
  description: {
    color: "white",
    fontSize: 18,
  },
  backButton: {
    marginTop: 30,
    borderColor: "white",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  backText: {
    color: "white",
    fontSize: 18,
  },
});
