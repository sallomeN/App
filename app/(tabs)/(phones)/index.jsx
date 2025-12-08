import { StyleSheet, FlatList, View, RefreshControl, Text} from "react-native";
import { phoneWidth } from "../../../constants/Dimensions";
import { Card } from "../../../components/Card";
import { useRouter } from "expo-router";
import { usePhones } from "../../../api/phones/usePhones";
const PhonesScreen = () => {
  const router = useRouter();
  const { data: phones, isLoading, refetch, isRefetching } = usePhones();

const goToDetails = (item) => {
  router.push({
    pathname: `/(phones)/${item._id}`
  });
};

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={phones}
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
    backgroundColor: "#F0F8FF",
  },
  linkText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
});

export default PhonesScreen;
