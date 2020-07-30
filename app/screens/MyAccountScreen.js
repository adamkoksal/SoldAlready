import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import useAuth from "../auth/useAuth";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";

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
    targetScreen: "Messages",
  },
];

function MyAccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/me.jpg")}
          title={user.name}
          subTitle={user.email}
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
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <View style={styles.logout}>
        <ListItem
          title="Log out"
          onPress={logOut}
          IconComponent={<Icon backgroundColor={colors.yellow} name="logout" />}
        ></ListItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.light,
    flex: 1,
  },
  container: {
    backgroundColor: colors.white,
    marginTop: 10,
    justifyContent: "center",
  },
  logout: {
    backgroundColor: colors.white,
    marginTop: 60,
    justifyContent: "center",
  },
  firstTab: {
    marginTop: 40,
  },
});

export default MyAccountScreen;
