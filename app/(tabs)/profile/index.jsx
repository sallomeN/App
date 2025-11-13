import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import { phoneWidth } from "../../../constants/Dimensions";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Foundation from "@expo/vector-icons/Foundation";
import Entypo from "@expo/vector-icons/Entypo";
import { useProfileContext } from "../../../context/profile/profile.context";
import { useRouter } from "expo-router";
import { removeData } from "../../../utils/AsyncStorage";



const ProfileScreen = () => {
const { currentUser, dispatch } = useProfileContext();
const router = useRouter();

const handleLogout = async () => {
  await removeData("currentUser"); 
  dispatch({ type: "LOGOUT" }); 
  router.replace("/logIn");
};
  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <View style={styles.iconAndNameBox}>
          <View>
            <FontAwesome name="user-circle-o" size={90} color="black" />
          </View>
          <View style={{ gap: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.nameTitle}>Name: </Text>
              <Text style={styles.name}>{currentUser?.name || " "}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.nameTitle}>Last Name: </Text>
              <Text style={styles.name}>{currentUser?.lastName || " "}</Text>
            </View>
          </View>
        </View>
        <View style={styles.emailBox}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="email" size={24} color="black" />
            <Text style={styles.title}> Your email adress:</Text>
          </View>
          <View style={styles.input}>
            <Text style={styles.text}>{currentUser?.email || " "}</Text>
          </View>
        </View>

        <View style={styles.phoneBox}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Foundation name="telephone" size={24} color="black" />
            <Text style={styles.title}> Your phone number:</Text>
          </View>
          <View style={styles.input}>
            <Text style={styles.text}>{currentUser?.phone || " "}</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => router.push("/profile/editProfile")}>
          <View style={styles.editBtn}>
            <Text style={styles.btnText}> Edit your info </Text>
            <Entypo name="edit" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: phoneWidth,
    paddingHorizontal: 15,
    backgroundColor: "#D3D3D3",
  },
  infoBox: {
    marginTop: 30,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "white",
    minHeight: "90%",
  },
  iconAndNameBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
  },
  nameTitle: {
    fontSize: 18,
  },
  emailBox: {
    marginTop: 50,
    gap: 10,
  },
  title: {
    fontSize: 18,
  },
  input: {
    borderRadius: 15,
    padding: 10,
    paddingVertical: 15,
    backgroundColor: "black",
    alignItems: "flex-start",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  phoneBox: {
    marginTop: 50,
    gap: 10,
  },
  editBtn: {
    marginTop: 70,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 3,
    width: "55%",
  },
  btnText: {
    fontSize: 18,
    fontWeight: "700",
  },
  logoutButton: {
    backgroundColor: "#ff4444",
    padding: 12,
    borderRadius: 8,
    marginTop: 40,
    width: "40%",
   justifyContent: "center",
   alignItems: "center",
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
export default ProfileScreen;