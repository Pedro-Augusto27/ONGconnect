import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import LoginTelas from './telas/LoginTela';
import TabNavigator from './telas/TabNavigator';
import { RootStackParamList } from './types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginTelas} />
        {/* "App" é a tela que contém as abas — recebe userName e voluntarioId */}
        <Stack.Screen name="App" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
