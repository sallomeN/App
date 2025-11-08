import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import * as Yup from "yup";
import React, { useState } from "react";
import { phoneWidth } from "../../../constants/Dimensions";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Foundation from "@expo/vector-icons/Foundation";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useProfileContext } from "../../../context/profile/profile.context";
import { useRouter } from "expo-router";
import { Formik } from "formik";

const profileSchema = Yup.object().shape({
  name: Yup.string()
    .required("Enter your name")
    .min(3, "Enter at least 3 characters"),
  lastName: Yup.string()
    .required("Enter your last name")
    .min(2, "Enter at least 2 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  phone: Yup.string().required("Phone number is required"),
});

const editProfileScreen = () => {
  const { currentUser, dispatch } = useProfileContext();
  const router = useRouter();

  return (

    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
    <Formik
      initialValues={{
        name: currentUser?.name || "",
        lastName: currentUser?.lastName || "",
        email: currentUser?.email || "",
        phone: currentUser?.phone || "",
      }}
      validationSchema={profileSchema}
      onSubmit={(values) => {
        const updatedUser = { ...currentUser, ...values };
        dispatch({ type: "UPDATE_PROFILE", payload: updatedUser });
        router.push("/profile");
      }}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        
        <View style={styles.container}>
          <View style={styles.infoBox}>
            <View style={styles.iconAndNameBox}>
              <View>
                <FontAwesome name="user-circle-o" size={90} color="#D3D3D3" />
              </View>
              <View style={{ gap: 10 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your name"
                  placeholderTextColor="black"
                  value={values.name}
                  onChangeText={handleChange("name")}
                />
                {errors.name && (
                  <Text style={styles.errorText}>{errors.name}</Text>
                )}

                <TextInput
                  style={styles.input}
                  placeholder="Enter your last name"
                  placeholderTextColor="black"
                  value={values.lastName}
                  onChangeText={handleChange("lastName")}
                />
                {errors.lastName && (
                  <Text style={styles.errorText}>{errors.lastName}</Text>
                )}
              </View>
            </View>
            <View style={styles.emailBox}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialIcons name="email" size={24} color="#D3D3D3" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="black"
                value={values.email}
                onChangeText={handleChange("email")}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>

            <View style={styles.phoneBox}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Foundation name="telephone" size={24} color="#D3D3D3" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Enter your phone number"
                placeholderTextColor="black"
                value={values.phone}
                onChangeText={handleChange("phone")}
                keyboardType="phone-pad"
              />
              {errors.phone && (
                <Text style={styles.errorText}>{errors.phone}</Text>
              )}
            </View>

            <TouchableOpacity onPress={handleSubmit}>
              <View style={styles.saveBtn}>
                <Text style={styles.btnText}>Save Changes</Text>
                <Fontisto name="save" size={24} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: phoneWidth,
    paddingHorizontal: 15,
    backgroundColor: "#D3D3D3",
  },
  infoBox: {
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "black",
    minHeight: "90%",
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
    backgroundColor: "#D3D3D3",
    alignItems: "flex-start",
    color: "black",
    fontSize: 14,
    fontWeight: "600",
    maxWidth: "100%",
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
    paddingVertical: 13,
    width: "55%",
    borderRadius: 15,
    backgroundColor: "#D3D3D3",
  },
  btnText: {
    fontSize: 14,
    fontWeight: "700",
    color: "black",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
    marginLeft: 5,
  },
});
export default editProfileScreen;
