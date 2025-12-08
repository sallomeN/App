import { Text, StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useLaptop } from "../../../api/laptops/useLaptop";

export default function PhoneDetails() {
  const router = useRouter();
  const canGoBack = router.canGoBack();
  const { id } = useLocalSearchParams();
  const { data: laptop, isLoading } = useLaptop(id);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!laptop) {
    return (
      <View>
        <Text>Laptop not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{laptop.name}</Text>
        <Image source={{ uri: laptop.imageUrl }} style={styles.productImg} />
        <Text style={styles.price}>{laptop.price}</Text>
        <Text style={styles.description}>{laptop.description}</Text>

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
  productImg: {
    width: 260,
    height: 260,
    borderRadius: 20,
    alignSelf: "left",
    marginVertical: 20,
  },
});
