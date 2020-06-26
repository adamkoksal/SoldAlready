import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({ backgroundColor, size = 40, name, color = "white" }) {
  return (
    <View
      style={[
        styles.logoContainer,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        { backgroundColor },
      ]}
    >
      <MaterialCommunityIcons name={name} color={color} size={size / 2} />
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
});

export default Icon;
