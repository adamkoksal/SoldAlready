import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import color from "../config/colors";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      background: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      background: colors.secondary,
    },
  },
];

function MyAccountScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/me.jpg")}
          title="Adam Koksal"
          // ImageComponent={
          //   <Icon backgroundColor={colors.primary} name="email" />
          // }
          subTitle="a.koksal02@gmail.com"
        ></ListItem>
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  backgroundColor={item.icon.background}
                  name={item.icon.name}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Log out"
          IconComponent={
            <Icon backgroundColor={colors.yellow} name="logout" />
          }
        ></ListItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: color.light,
    flex: 1,
  },
  container: {
    backgroundColor: color.white,
    marginTop: 60,
    justifyContent: "center",
  },
  firstTab: {
    marginTop: 40,
  },
});

export default MyAccountScreen;
