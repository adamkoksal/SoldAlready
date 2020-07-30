import { Formik } from "formik";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import authApi from "../api/auth";
import usersApi from "../api/users";
import useAuth from "../auth/useAuth";
import ActivityIndicator from "../components/ActivityIndicator";
import AppFormField from "../components/AppFormField";
import ErrorMessage from "../components/ErrorMessage";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

function RegisterScreen() {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const [error, setError] = useState();
  const auth = useAuth();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occured.");
        console.log(result);
      }
      return;
    }

    const { data: token } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(token);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {() => (
            <>
              <ErrorMessage error={error} visible={error} />
              <AppFormField name="name" placeholder="Name" icon="account" />
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
              <SubmitButton title="register" />
            </>
          )}
        </Formik>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
});

export default RegisterScreen;
