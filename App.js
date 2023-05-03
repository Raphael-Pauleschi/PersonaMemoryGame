import * as React from 'react';
import GameScreen from './Pages/GameScreen';
import StartScreen from './Pages/StartScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Start Game" component={StartScreen} />
        <Stack.Screen name="Memory Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
