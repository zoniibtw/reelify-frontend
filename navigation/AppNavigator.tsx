import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack';
import { AuthProvider } from '../context/AuthContext';

export default function AppNavigator() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AuthProvider>
  );
}
