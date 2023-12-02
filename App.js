import * as React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ComingScreen from  './src/screens/ComingScreen';
import NavBottom from './src/NavBottom';


// const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={ HomeScreen } options={{headerShown:false}}/>
    //     <Stack.Screen name="Coming" component={ ComingScreen } options={{headerShown:false}}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    
    <NavBottom></NavBottom>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
