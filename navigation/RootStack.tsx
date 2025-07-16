

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MatchedTitleScreen from '../screens/MatchedTitleScreen';

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  MatchedTitle: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="MatchedTitle" component={MatchedTitleScreen} />
    </Stack.Navigator>
  );
}