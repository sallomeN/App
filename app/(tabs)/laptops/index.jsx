import { StyleSheet, View, FlatList } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { phoneWidth } from "../../../constants/Dimensions";
import { Card } from "../../../components/Card";
import { useRouter } from "expo-router";

const laptops = [
  {
    id: "1",
    name: "MacBook Air",
    price: "$1199 !!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "#FF4500",
  },
  {
    id: "2",
    name: "Dell",
    price: "$1000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "#FF7F50",
    linkColor: "#FF4500",
  },
  {
    id: "3",
    name: "HP",
    price: "$995",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "#FF6F61",
    linkColor: "#FF4500",
  },
  {
    id: "4",
    name: "Lenovo",
    price: "$899 !!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "#FF4500",
  },
  {
    id: "5",
    name: "Asus ZenBook",
    price: "$950",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "#8B0000",
    linkColor: "#FF4500",
  },
  {
    id: "6",
    name: "Acer Swift",
    price: "$870",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, molestiae.",
    background: "#1B1B1B",
    nameColor: "#B22222",
    linkColor: "#FF4500",
  },
  {
    id: "7",
    name: "Microsoft Surface",
    price: "$1100",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem deleniti illo!",
    background: "#1B1B1B",
    nameColor: "white",
    linkColor: "#FF4500",
  },
];

const LaptopsScreen = () => {
  const router = useRouter();

  const goToDetails = (item) => {
    router.push({
      pathname: `/laptops/${item.id}`,
      params: {
        name: item.name,
        price: item.price,
        description: item.description,
      },
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={laptops}
        renderItem={({ item, index }) => (
          <Card
            key={index}
            name={item.name}
            price={item.price}
            description={item.description}
            background={item.background}
            nameColor={item.nameColor}
            linkColor={item.linkColor}
            onPress={() => goToDetails(item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: phoneWidth,
    paddingHorizontal: 15,
    backgroundColor: "#FF4500",
  },
  linkText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
});
export default LaptopsScreen;
