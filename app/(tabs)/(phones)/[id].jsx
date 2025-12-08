import { Text, StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { usePhone } from "../../../api/phones/usePhone";

export default function PhoneDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { data: phone, isLoading } = usePhone(id);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!phone) {
    return (
      <View>
        <Text>Phone not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{phone.name}</Text>
        <Image source={{ uri: phone.imageUrl }} style={styles.productImg} />
        <Text style={styles.price}>{phone.price}</Text>
        <Text style={styles.description}>{phone.description}</Text>

        {router.canGoBack() && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backText}>Go Back</Text>
          </TouchableOpacity>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
    padding: 20,
  },
  title: {
    color: "black",
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
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  backText: {
    color: "black",
    fontSize: 18,
  },
  productImg: {
    width: 260,
    height: 260,
    borderRadius: 20,
    marginVertical: 20,
  },
});
