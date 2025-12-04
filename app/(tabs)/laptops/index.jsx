import { StyleSheet, View, FlatList, RefreshControl, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { phoneWidth } from "../../../constants/Dimensions";
import { Card } from "../../../components/Card";
import { useRouter } from "expo-router";
import { useLaptops } from "../../../api/laptops/useLaptops";
// import axios from "axios";
// import { useEffect } from "react";
// import { useProfileContext } from "../../../context/profile/profile.context";

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
//   },
// ];

const LaptopsScreen = () => {
  const router = useRouter();
  const { data: laptops, isLoading, refetch, isRefetching } = useLaptops();

  const goToDetails = (item) => {
    router.push({
      pathname: `/laptops/${item._id}`,
      params: {
        name: item.name,
        price: item.price,
        description: item.description,
      },
    });
  };
  if (isLoading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

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
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: phoneWidth,
    paddingHorizontal: 15,
    backgroundColor: "#C0C0C0",
  },
  linkText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
});
export default LaptopsScreen;
