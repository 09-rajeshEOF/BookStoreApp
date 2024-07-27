import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Profile from './src/screens/Profile';
import BookList from './src/screens/BookList';
import Orders from './src/screens/Orders';
import HomeScreen from './src/screens/HomeScreen';
const Tab = createBottomTabNavigator();
export default function BottomTabNavigator() {

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        tabBarIcon: () => {
                            return (
                                <Feather name="home" size={24} color="black" />
                            )
                        }
                    }} />
                <Tab.Screen
                    name='Books'
                    component={BookList}
                    options={{
                        tabBarIcon: () => {
                            return (
                                <Feather name="book-open" size={24} color="black" />
                            )
                        }
                    }} />
                <Tab.Screen
                    name='Orders'
                    component={Orders}
                    options={{
                        tabBarIcon: () => {
                            return (
                                <Feather name="box" size={24} color="black" />
                            )
                        }
                    }} />

                <Tab.Screen
                    name='Profile'
                    component={Profile}
                    options={{
                        tabBarIcon: () => {
                            return (
                                <Feather name="shopping-cart" size={24} color="black" />
                            )
                        }
                    }} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})