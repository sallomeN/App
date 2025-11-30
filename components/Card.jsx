import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export function Card({
  name,
  price,
  description,
  background,
  nameColor,
  linkColor,
  onPress,
}) {
  return (
    <View style={[styles.card, { backgroundColor: background }]}>
      <Text style={[styles.itemName, { color: nameColor }]}>{name}</Text>
      <Text style={styles.itemPrice}>{price}</Text>
      <Text style={styles.itemDescription}>{description}</Text>

      <View style={styles.linkBox}>
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.linkText, { color: linkColor }]}>
            View details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginVertical: 10,
    borderRadius: 20,
  },
  itemPrice: {
    fontSize: 22,
    fontWeight: "700",
    paddingVertical: 5,
    color: "red",
  },
  itemName: {
    fontSize: 25,
    fontWeight: "800",
  },
  itemDescription: {
    fontSize: 18,
    color: "#D3D3D3",
  },
  linkBox: {
    marginTop: 15,
    paddingVertical: 5,
    borderStyle: "solid",
    borderColor: "white",
    // borderWidth: 4,
    borderRadius: 10,
    width: "55%",
    alignItems: "flex-start",
  },
  linkText: {
    fontSize: 17,
    fontWeight: "700",
  },
});
