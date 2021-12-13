import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { News,NewsDetails } from "../Screens";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="News" component={News} options={{ headerShown: false }} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} options={{ title: '' }}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;