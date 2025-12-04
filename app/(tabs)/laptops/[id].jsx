import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
// import { useProfileContext } from "../../../context/profile/profile.context";
import { useLaptops } from "../../../api/laptops/useLaptops";
// const laptops = [
//   {
//     id: "1",
//     name: "MacBook Air",
//     price: "$1199",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
//     background: "#1B1B1B",
//     nameColor: "white",
//     linkColor: "white",
//     imageUrl:
//       "https://atlas-content-cdn.pixelsquid.com/stock-images/macbook-air-gold-laptop-72rDZq8-600.jpg",
//   },
//   {
//     id: "2",
//     name: "Dell",
//     price: "$1000",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
//     background: "#1B1B1B",
//     nameColor: "white",
//     linkColor: "white",
//     imageUrl: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Pic.png",
//   },
//   {
//     id: "3",
//     name: "HP",
//     price: "$995",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
//     background: "#1B1B1B",
//     nameColor: "white",
//     linkColor: "white",
//     imageUrl:
//       "https://png.pngtree.com/png-vector/20240206/ourmid/pngtree-hp-laptop-white-background-png-image_11716727.png",
//   },
//   {
//     id: "4",
//     name: "Lenovo",
//     price: "$899 !!",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
//     background: "#1B1B1B",
//     nameColor: "white",
//     linkColor: "white",
//     imageUrl:
//       "https://crdms.images.consumerreports.org/f_auto,w_600/prod/products/cr/models/415628-15-to-16-inch-laptops-lenovo-ideapad-1i-10041384.png",
//   },
//   {
//     id: "5",
//     name: "Asus ZenBook",
//     price: "$950",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
//     background: "#1B1B1B",
//     nameColor: "white",
//     linkColor: "white",
//     imageUrl:
//       "https://atlas-content-cdn.pixelsquid.com/stock-images/asus-zenbook-pro-dual-screen-laptop-YeXXVaE-600.jpg",
//   },
//   {
//     id: "6",
//     name: "Acer Swift",
//     price: "$870",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, molestiae.",
//     background: "#1B1B1B",
//     nameColor: "white",
//     linkColor: "white",
//     imageUrl:
//       "https://hnsgsfp.imgix.net/9/images/detailed/103/Acer-SFG14-73T-55BH-Laptop-1.PNG?fit=fill&bg=0FFF&w=1536&h=900&auto=format,compress",
//   },
//   {
//     id: "7",
//     name: "Microsoft Surface",
//     price: "$1100",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
//     background: "#1B1B1B",
//     nameColor: "white",
//     linkColor: "white",
//     imageUrl:
//       "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-color-center-render-fy25:VP4-1260x795?fmt=png-alpha",
//   },
// ];

export default function PhoneDetails() {
  const router = useRouter();
  const canGoBack = router.canGoBack();
  const { id } = useLocalSearchParams();
  const { data: laptops } = useLaptops();

 const laptop = laptops.find((item) => item._id === id);

  useEffect(() => {
    if (laptop === undefined) {
      router.push("/not-found");
    }
  }, [id]);


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{laptop.name}</Text>
        <Image source={{ uri: laptop?.imageUrl }} style={styles.productImg} />
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
