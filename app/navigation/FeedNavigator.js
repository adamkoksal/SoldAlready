import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListScreen from "../screens/ListScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator headerMode="none" mode="modal">
    <Stack.Screen name="Listings" component={ListScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
