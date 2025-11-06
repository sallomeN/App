import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useProfileContext } from "../context/profile/profile.context";
import { useRouter } from "expo-router";


const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Register = () => {
  const { dispatch } = useProfileContext();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          dispatch({ type: "REGISTER", payload: values });
          router.push("/logIn");
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              placeholder="Name"
              value={values.name}
              onChangeText={handleChange("name")}
              style={styles.input}
            />
            {touched.name && errors.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}

            <TextInput
              placeholder="Last Name"
              value={values.lastName}
              onChangeText={handleChange("lastName")}
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
              keyboardType="phone-pad"
            />
            {touched.phone && errors.phone && (
              <Text style={styles.error}>{errors.phone}</Text>
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
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/logIn")}>
              <Text style={styles.link}>Already have an account? Login</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    color: "#FFEA00",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#FFEA00",
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    backgroundColor: "#FFEA00",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
  },
  link: {
    color: "#FFEA00",
    textAlign: "center",
    marginTop: 20,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default Register;
