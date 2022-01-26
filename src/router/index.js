import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home} from '../screens';

const Router = () => {

const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
  </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
