import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { ChooseScreen, HomeScreen } from 'screens';
import { GlobalStateProvider } from './GlobalStateProvider';

type StackParams = {
  home: undefined;
  choose: undefined;
}
const Stack = createStackNavigator<StackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <GlobalStateProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='home' component={HomeScreen} />
            <Stack.Screen name='choose' component={ChooseScreen} />
          </Stack.Navigator>
        </GlobalStateProvider>
      </PaperProvider>
    </NavigationContainer>
  );
}

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends StackParams { }
  }
}

