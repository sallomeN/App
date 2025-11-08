import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function NotFoundScreen() {
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
          <Text style={styles.title}>404 ❌</Text>
          <Text style={styles.message}>This page does not exist.</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/(phones)")}
          >
            <Text style={styles.buttonText}>Go back</Text>
          </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1B1B",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    color: "white",
    fontWeight: "bold",
  },
  message: {
    color: "white",
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});
