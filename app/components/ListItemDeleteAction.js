import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItemDeleteAction({onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons name="trash-can" size={30} color={colors.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ListItemDeleteAction;
