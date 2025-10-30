import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { phoneWidth } from "../../../constants/Dimensions";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Foundation from "@expo/vector-icons/Foundation";
import Entypo from "@expo/vector-icons/Entypo";
import { useLocalSearchParams } from "expo-router";

const ProfileScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.infoBox}>
          <View style={styles.iconAndNameBox}>
            <View>
              <FontAwesome name="user-circle-o" size={90} color="black" />
            </View>
            <View style={{ gap: 10 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.nameTitle}>Name: </Text>
                <Text style={styles.name}>{params.name || "Salome"}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.nameTitle}>Last Name: </Text>
                <Text style={styles.name}>{params.lastName || "Nozadze"}</Text>
              </View>
            </View>
          </View>
          <View style={styles.emailBox}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons name="email" size={24} color="black" />
              <Text style={styles.title}> Your email adress:</Text>
            </View>
            <View style={styles.input}>
              <Text style={styles.text}>
                {params.email || "nozadzesalome763@gmail.com"}
              </Text>
            </View>
          </View>

          <View style={styles.phoneBox}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Foundation name="telephone" size={24} color="black" />
              <Text style={styles.title}> Your phone number:</Text>
            </View>
            <View style={styles.input}>
              <Text style={styles.text}>{params.phone || "557 496 212"}</Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => router.push("/profile/editProfile")}>
            <View style={styles.editBtn}>
              <Text style={styles.btnText}> Edit your info </Text>
              <Entypo name="edit" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: phoneWidth,
    paddingHorizontal: 15,
    backgroundColor: "black",
  },
  infoBox: {
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#FFEA00",
    height: "90%",
  },
  iconAndNameBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
  },
  nameTitle: {
    fontSize: 22,
  },
  emailBox: {
    marginTop: 50,
    gap: 10,
  },
  title: {
    fontSize: 22,
  },
  input: {
    borderRadius: 15,
    padding: 10,
    paddingVertical: 15,
    backgroundColor: "black",
    alignItems: "flex-start",
  },
  text: {
    color: "#FFEA00",
    fontSize: 20,
  },
  phoneBox: {
    marginTop: 50,
    gap: 10,
  },
  editBtn: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    padding: 10,
    width: "55%",
    borderRadius: 15,
    borderWidth: 5,
  },
  btnText :{
    fontSize: 18,
    fontWeight: "700",
  }
});
export default ProfileScreen;