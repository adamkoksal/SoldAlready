import { useFormikContext } from "formik";
import React from "react";

import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";

function AppFormField({ name, ...otherProps }) {
  const {
    setFieldValue,
    values,
    errors,
    setFieldTouched,
    touched,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
