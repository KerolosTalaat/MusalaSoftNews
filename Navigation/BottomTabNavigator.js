import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';

import StackNavigator from "./StackNavigator";
import { Settings } from '../Screens';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="News" component={StackNavigator} options={{
				tabBarIcon: ({ color, size }) => (
					<Icon name="newspaper" color={color} size={size} />
				),
				headerShown: false
			}} />
			<Tab.Screen name="Settings" component={Settings} options={{
				tabBarIcon: ({ color, size }) => (
					<Icon name="settings-sharp" color={color} size={size} />
				),
				headerShown: false
			}} />
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;