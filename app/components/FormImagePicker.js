import React from "react";
import ImageInputList from "./ImageInputList";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

function FormImagePicker({ name }) {
  const { values, errors, setFieldValue, touched } = useFormikContext();

  const addImage = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };
  const removeImage = (uri) => {
    setFieldValue(
      name,
      values[name].filter((u) => u !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onRemoveImage={removeImage}
        onAddImage={addImage}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
