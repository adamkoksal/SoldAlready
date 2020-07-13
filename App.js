import React from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import { View, Text } from "react-native";
import { AsyncStorage } from "react-native";

export default function App() {
  const demo = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
      const value = await AsyncStorage.getItem("person");
      const person = JSON.parse(value);
      console.log(person);
    } catch (error) {
      console.log(error);
    }
  };
  demo();
  return null;
}
