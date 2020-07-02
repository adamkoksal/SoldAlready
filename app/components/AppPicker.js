import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  FlatList,
} from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";
import PickerItem from "./PickerItem";
import Screen from "./Screen";
import ListItemSeparator from "./ListItemSeparator";

function AppPicker({
  PickerItemComponent = PickerItem,
  icon,
  placeholder,
  items,
  numColumns = 1,
  selectedItem,
  onSelectItem,
  centerCategories = true,
  width = "100%",
}) {
  const [modelVisible, setModelVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModelVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={23}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modelVisible} animationType="slide">
        <Screen>
          <TouchableWithoutFeedback onPress={() => setModelVisible(false)}>
            <View style={{ alignItems: "center", marginBottom: 15 }}>
              <MaterialCommunityIcons name="close" size={30} />
            </View>
          </TouchableWithoutFeedback>
          <FlatList
            data={items}
            alignItems={centerCategories}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModelVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 15,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    marginLeft: 10,
    flex: 1,
  },
  placeholder: {
    color: colors.medium,
    marginLeft: 10,
    flex: 1,
  },
});

export default AppPicker;
