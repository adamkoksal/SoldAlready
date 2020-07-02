import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Adam Koksal",
    description: "Is this item still available?",
    image: require("../assets/me.jpg"),
  },
  {
    id: 2,
    title: "Adam Koksal",
    description: "Will you take 200 for this?",
    image: require("../assets/me.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            showChevrons
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "Adam Koksal",
              description: "Is this item still available?",
              image: require("../assets/me.jpg"),
            },
            {
              id: 2,
              title: "Adam Koksal",
              description: "Will you take 200 for this?",
              image: require("../assets/me.jpg"),
            },
            {
              id: 3,
              title: "Adam Koksal",
              description: "See you tomorrow!",
              image: require("../assets/me.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
