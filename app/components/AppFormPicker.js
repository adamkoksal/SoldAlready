import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";

import AppPicker from "./AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ name, visible, ...otherProps }) {
  const { values, errors, setFieldValue, touched } = useFormikContext();
  return (
    <>
      <AppPicker
        onSelectItem={(item) => setFieldValue(name, item)}
        {...otherProps}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});

export default AppFormPicker;
