import React from "react";
import {
  Image,
  SafeAreaView,
  View,
  StyleSheet,
  ImageBackground,
  Text,
} from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={8}
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.slogan}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="login" onPress={() => console.log("clicked")} />
        <AppButton
          title="register"
          color="secondary"
          onPress={() => console.log("clicked")}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  logoContainer: {
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    top: 80,
  },
  logo: {
    width: 100,
    height: 100,
  },
  slogan: {
    fontSize: 22,
    marginTop: 25,
    fontWeight: "bold",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
});

export default WelcomeScreen;
