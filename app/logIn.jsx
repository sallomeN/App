import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useProfileContext } from "../context/profile/profile.context";
import { useRouter } from "expo-router";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LogIn = () => {
  const { users, dispatch } = useProfileContext();
  const router = useRouter();

  const handleLogin = (values) => {
    const user = users.find(
      (u) => u.email === values.email && u.password === values.password
    );

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
      router.push("/(tabs)");
    } else {
      Alert.alert("Login failed", "Invalid email or password");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sign in</Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <>
              <TextInput
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange("email")}
                style={styles.input}
                keyboardType="email-address"
              />
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}

              <TextInput
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange("password")}
                style={styles.input}
                secureTextEntry
              />
              {touched.password && errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}

              <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Sign in</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push("/register")}>
                <Text style={styles.link}>Don’t have an account? Sign up!</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#F0F8FF",
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    backgroundColor: "#F0F8FF",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
  },
  link: {
    color: "#87CEFA",
    textAlign: "center",
    marginTop: 20,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default LogIn;
