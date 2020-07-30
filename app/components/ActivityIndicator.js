import LottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "white",
    opacity: 0.8,
    zIndex: 1,
  },
});

export default ActivityIndicator;
