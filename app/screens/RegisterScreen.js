import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import { Formik } from "formik";
import AppFormField from "../components/AppFormField";
import * as Yup from "yup";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <>
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
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
});

export default RegisterScreen;
