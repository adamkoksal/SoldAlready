import { Formik } from "formik";
import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import AppFormField from "../components/AppFormField";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <AppFormField
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
              name="email"
            />
            <AppFormField
              icon="lock"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              placeholder="Password"
              textContentType="password"
              name="password"
            />

            <SubmitButton title="login" />
          </>
        )}
      </Formik>
    </Screen>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 15,
  },
});
export default LoginScreen;
