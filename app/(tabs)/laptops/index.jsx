import { StyleSheet, View, FlatList, RefreshControl, Text } from "react-native";
import { phoneWidth } from "../../../constants/Dimensions";
import { Card } from "../../../components/Card";
import { useRouter } from "expo-router";
import { useLaptops } from "../../../api/laptops/useLaptops";

const LaptopsScreen = () => {
  const router = useRouter();
  const { data: laptops, isLoading, refetch, isRefetching } = useLaptops();

  const goToDetails = (item) => {
    router.push({
      pathname: `/laptops/${item._id}`
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
