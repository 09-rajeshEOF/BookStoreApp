import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator, NavigationContainer} from '@react-navigation/native-stack'
import React from 'react'
import {Signup,Login,Getstarted} from './src/screens';

const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='getStarted'>
            <Stack.Screen
            name = 'getStarted'
            component={getStarted}
            options={{
                headerShown:false
            }}
            />

            <Stack.Screen
            name = 'signup'
            component={Signup}
            options={{
                headerShown:false
            }}
            />

            <Stack.Screen
            name = 'login'
            component={Login}
            options={{
                headerShown:false
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})