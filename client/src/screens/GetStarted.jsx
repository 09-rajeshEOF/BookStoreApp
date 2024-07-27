import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {COLORS} from '../constants/colors.js'
import Button from '../components/Button.jsx'
export default function GetStarted() {
    return (
       <View>
        <LinearGradient style={{ flex: 1 }} colors={[COLORS.secondary, COLORS.primary]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>

            <View style={{ flex: 1 }}>
                <View>
                    <Image source={require('../../assets/icon.png')}
                        style={
                            {
                                height: 100,
                                width: 100,
                                borderRadius: 20,
                                position: 'absolue',
                                top: 10,
                                transform: [
                                    { translateX: 20 },
                                    { translateY: 50 },
                                    { rotate: '-15deg' },
                                ]

                            }
                        } />

                    <Image source={require('../../assets/icon.png')}
                        style={
                            {
                                height: 100,
                                width: 100,
                                borderRadius: 20,
                                position: 'absolue',
                                top: -30,
                                left: 100,
                                transform: [,
                                    { translateX: 50 },
                                    { translateY: 50 },
                                    { rotate: '-5deg' },
                                ]

                            }
                        } />

                    <Image source={require('../../assets/icon.png')}
                        style={
                            {
                                height: 100,
                                width: 100,
                                borderRadius: 20,
                                position: 'absolue',
                                top: 130,
                                left: -50,
                                transform: [,
                                    { translateX: 50 },
                                    { translateY: 50 },
                                    { rotate: '15deg' },
                                ]

                            }
                        } />
                        <Button
                        title = 'Join Now'
                        onPress = {() => NavigationPreloadManager.navigate("Signup")}
                        style ={{
                            marginTop:22,
                            width:"100%"
                        }}/>

                </View>
            </View>
        </LinearGradient>
        </View>
    )
}

