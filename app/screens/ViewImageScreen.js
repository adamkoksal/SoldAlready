import React from "react";

import { View, ImageBackground, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" color="white" size={30} />
      </View>
      <ImageBackground
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.background}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.black, flex: 1 },
  background: {
    height: "100%",
    width: "100%",
  },
  closeIcon: {
    position: "absolute",
    top: 50,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 50,
    right: 30,
  },
});

export default ViewImageScreen;
