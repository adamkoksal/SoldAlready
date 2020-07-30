import { Formik } from "formik";
import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import ActivityIndicator from "../components/ActivityIndicator";
import AppFormField from "../components/AppFormField";
import ErrorMessage from "../components/ErrorMessage";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const loginApi = useApi(authApi.login);
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await loginApi.request(email, password);
    if (!result.ok) return setLoginFailed(true);

    setLoginFailed(false);
    logIn(result.data);
  };

  return (
    <>
      <ActivityIndicator visible={loginApi.loading} />
      <Screen style={styles.container}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {() => (
            <>
              <ErrorMessage
                error="Invalid email and/or password."
                visible={loginFailed}
              />
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
    </>
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
