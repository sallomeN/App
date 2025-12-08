import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useProfileContext } from "../context/profile/profile.context";
import { useRouter } from "expo-router";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(3),
  lastName: Yup.string().required("Last name is required").min(3),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Register = () => {
  const { dispatch } = useProfileContext();
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sign up!</Text>
        <Formik
          initialValues={{
            name: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={async (values) => {
            try {
              const response = await fetch(
                "http://192.168.1.95:5000/api/auth/register",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(values),
                }
              );

              const data = await response.json();

              if (response.ok) {
                Alert.alert("Success", "Account created successfully!");
                router.push("/logIn");
              } else {
                Alert.alert("Registration failed", data.message);
              }
            } catch (error) {
              console.error(error);
              Alert.alert("Error", "Something went wrong");
            }
          }}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            handleBlur,
          }) => (
            <>
              <TextInput
                placeholder="Name"
                value={values.name}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                style={styles.input}
              />
              {touched.name && errors.name && (
                <Text style={styles.error}>{errors.name}</Text>
              )}

              <TextInput
                placeholder="Last Name"
                value={values.lastName}
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                style={styles.input}
              />
              {touched.lastName && errors.lastName && (
                <Text style={styles.error}>{errors.lastName}</Text>
              )}

              <TextInput
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange("email")}
                style={styles.input}
                onBlur={handleBlur("email")}
                keyboardType="email-address"
              />
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}

              <TextInput
                placeholder="Phone"
                value={values.phone}
                onChangeText={handleChange("phone")}
                style={styles.input}
                onBlur={handleBlur("phone")}
                keyboardType="phone-pad"
              />
              {touched.phone && errors.phone && (
                <Text style={styles.error}>{errors.phone}</Text>
              )}

              <TextInput
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                style={styles.input}
                secureTextEntry
              />
              {touched.password && errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}

              <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Create Account</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push("/logIn")}>
                <Text style={styles.link}>
                  Already have an account? Sign in!
                </Text>
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
    backgroundColor: "#E6E6FA",
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    backgroundColor: "#E6E6FA",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
  },
  link: {
    color: "#C8C8F0",
    textAlign: "center",
    marginTop: 20,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default Register;
