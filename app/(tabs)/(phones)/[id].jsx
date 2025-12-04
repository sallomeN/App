import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
// import { useProfileContext } from "../../../context/profile/profile.context";
import { usePhones } from "../../../api/phones/usePhones";
// const phones = [
//   {
//     id: "1",
//     name: "iPhone 15",
//     price: "$999",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
//     background: "black",
//     nameColor: "white",
//     linkColor: "#F0F8FF",
//     imageUrl:
//       "https://cdn.new-brz.net/app/public/models/MTP13HX-A/large/w/231108150054570863.webp",
//   },
//   {
//     id: "2",
//     name: "Samsung Galaxy A22",
//     price: "$680 !!",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
//     background: "black",
//     nameColor: "white",
//     linkColor: "#F0F8FF",
//     imageUrl:
//       "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a22-1.jpg",
//   },
//   {
//     id: "3",
//     name: "Google Pixel 9",
//     price: "$790",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
//     background: "black",
//     nameColor: "white",
//     linkColor: "#F0F8FF",
//     imageUrl:
//       "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-pro-1.jpg",
//   },
//   {
//     id: "4",
//     name: "Lenovo",
//     price: "$699",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
//     background: "black",
//     nameColor: "white",
//     linkColor: "#F0F8FF",
//     imageUrl:
//       "https://www.pngall.com/wp-content/uploads/8/Lenovo-PNG-High-Quality-Image.png",
//   },
//   {
//     id: "5",
//     name: "Nokia Edge 5G",
//     price: "$650",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis explicabo.",
//     background: "black",
//     nameColor: "white",
//     linkColor: "#F0F8FF",
//     imageUrl:
//       "https://www.mobilebd.co/wp-content/uploads/2021/05/Nokia-Edge-2020-Official-Image.png",
//   },
//   {
//     id: "6",
//     name: "Huawei Nova 12",
//     price: "$720",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
//     background: "black",
//     nameColor: "white",
//     linkColor: "#F0F8FF",
//     imageUrl:
//       "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/admin-image/phones/nova-12s/list/blue.png",
//   },
//   {
//     id: "7",
//     name: "OnePlus 12",
//     price: "$850",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
//     background: "black",
//     nameColor: "white",
//     linkColor: "#F0F8FF",
//     imageUrl:
//       "https://image01.oneplus.net/media/202405/28/b96848b7acd10dafde32203d12f6fea7.png",
//   },
// ];

export default function PhoneDetails() {
  const router = useRouter();
  const canGoBack = router.canGoBack();
  const { id } = useLocalSearchParams();
  const { data: phones } = usePhones();
 
   const phone = phones.find((item) => item._id === id);

  useEffect(() => {
    if (phone === undefined) {
      router.push("/not-found");
    }
  }, [id]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{phone.name}</Text>
        <Image source={{ uri: phone?.imageUrl }} style={styles.productImg} />
        <Text style={styles.price}>{phone.price}</Text>
        <Text style={styles.description}>{phone.description}</Text>

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
    alignSelf: "left",
    marginVertical: 20,
  },
});
