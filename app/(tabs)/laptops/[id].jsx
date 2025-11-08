import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
const laptops = [
  {
    id: "1",
    name: "MacBook Air",
    price: "$1199",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "white",
  },
  {
    id: "2",
    name: "Dell",
    price: "$1000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "white",
  },
  {
    id: "3",
    name: "HP",
    price: "$995",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "white",
  },
  {
    id: "4",
    name: "Lenovo",
    price: "$899 !!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "white",
  },
  {
    id: "5",
    name: "Asus ZenBook",
    price: "$950",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "white",
  },
  {
    id: "6",
    name: "Acer Swift",
    price: "$870",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, molestiae.",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "white",
  },
  {
    id: "7",
    name: "Microsoft Surface",
    price: "$1100",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "white",
  },
];

export default function PhoneDetails() {
  const { id, name, price, description } = useLocalSearchParams();
  const router = useRouter();
  const canGoBack = router.canGoBack();
  const laptop = laptops.find((item) => item.id === id);

  useEffect(() => {
    if (laptop === undefined) {
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
            <Text style={styles.backText}>Go Back</Text>
          </TouchableOpacity>
        )}

        {/* <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("/10")}
        >
          <Text style={styles.backText}>Go to wrong screen</Text>
        </TouchableOpacity> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C0C0C0",
    padding: 20,
  },
  title: {
    color: "#1B1B1B",
    fontSize: 28,
    fontWeight: "bold",
  },
  price: {
    color: "red",
    fontSize: 22,
    marginVertical: 10,
  },
  description: {
    color: "black",
    fontSize: 18,
  },
  backButton: {
    marginTop: 30,
    borderColor: "#1B1B1B",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  backText: {
    color: "#1B1B1B",
    fontSize: 18,
  },
});
