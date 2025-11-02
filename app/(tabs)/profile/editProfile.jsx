import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import { phoneWidth } from "../../../constants/Dimensions";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Foundation from "@expo/vector-icons/Foundation";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useProfileContext } from "../../../context/profile/profile.context";
import { useRouter } from "expo-router";


const editProfileScreen = () => {
const {profileDetails, dispatch} = useProfileContext()
const router = useRouter();
   
  return (
    // <KeyboardAvoidingView>
    //   <ScrollView>
        <View style={styles.container}>
          <View style={styles.infoBox}>
            <View style={styles.iconAndNameBox}>
              <View>
                <FontAwesome name="user-circle-o" size={90} color="black" />
              </View>
              <View style={{ gap: 10 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your name"
                  placeholderTextColor="#FFC1CC"
                  onChangeText={(value) =>
                    dispatch({ type: "UPDATE", fieldName: "name", value })
                  }
                />

                <TextInput
                  style={styles.input}
                  placeholder="Enter your last name"
                  placeholderTextColor="#FFC1CC"
                  onChangeText={(value) =>
                    dispatch({ type: "UPDATE", fieldName: "lastName", value })
                  }
                />
              </View>
            </View>
            <View style={styles.emailBox}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialIcons name="email" size={24} color="black" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#FFC1CC"
                onChangeText={(value) =>
                  dispatch({ type: "UPDATE", fieldName: "email", value })
                }
              />
            </View>

            <View style={styles.phoneBox}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Foundation name="telephone" size={24} color="black" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Enter your phone number"
                placeholderTextColor="#FFC1CC"
                onChangeText={(value) =>
                  dispatch({ type: "UPDATE", fieldName: "phone", value })
                }
              />
            </View>

            <TouchableOpacity onPress={() => router.push("/profile")}>
              <View style={styles.saveBtn}>
                <Text style={styles.btnText}>Save Changes</Text>
                <Fontisto name="save" size={24} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
    //   </ScrollView>
    // </KeyboardAvoidingView>
  );
};
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
    backgroundColor: "#FFC1CC",
    height: "90%",
  },
  iconAndNameBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  emailBox: {
    marginTop: 40,
    gap: 10,
  },
  input: {
    borderRadius: 15,
    padding: 10,
    paddingVertical: 15,
    backgroundColor: "black",
    alignItems: "flex-start",
    color: "white",
    fontSize: 18, 
    fontWeight: "600",
  },
  phoneBox: {
    marginTop: 40,
    gap: 10,
  },
  saveBtn: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    padding: 10,
    paddingVertical: 15,
    width: "55%",
    borderRadius: 15,
    backgroundColor: "black",
  },
  btnText: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
});
export default editProfileScreen;
