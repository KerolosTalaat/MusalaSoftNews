/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { BottomTabNavigator } from './Navigation'

const App = () => {
  const isDark = useColorScheme() === 'dark';

  const MSNDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      detailsText: `#a9a9a9`
    },
  }

  const MSNDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      detailsText: `#d3d3d3`    
    },
  }

  return (
    <NavigationContainer  theme={isDark ? MSNDarkTheme : MSNDefaultTheme} >
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
