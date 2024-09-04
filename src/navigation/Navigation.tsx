import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import BaymaxScreen from '../screens/BaymaxScreen';

// It's a global stack that can be used anywhere that's why  
// wrote above
const Stack = createNativeStackNavigator()

// FC means fucntional componnets:
const Navigation:FC = () => {
  return (
    // <NavigationContainer>
 <Stack.Navigator screenOptions={{headerShown: false}} > 
    <Stack.Screen name='SplashScreen' component={SplashScreen}  />
    <Stack.Screen name='BaymaxScreen' component={BaymaxScreen}  />
 </Stack.Navigator>
//  </NavigationContainer>

  )
}

export default Navigation

const styles = StyleSheet.create({})