import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Input from '../components/Input'
export default function Login({ navigation }) {
    return (
        <View>
            <LinearGradient colors={['#342a1f5', '#03bafc']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                style={{
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    height: Dimensions.get('window').height * 0.20, width: '100%',
                    alignItems: 'center',
                    paddingTop: 40,


                }}
            >
                <Text style={{
                    fonrSize: 31,
                    color: 'white', fontWeight: 'bold'
                }}>
                    Rajesh Pattanaik
                </Text>
            </LinearGradient>

            <View style={{ elevation: 10, backgroundColor: 'white', borderRadius: 10, margin: 10, marginTop: -20, paddingVertical: 20, paddingHorizontal: 15 }}>
                <Text style={{ fontSize: 19, fontWeight: 'bold', color: '303bafc', textAlign: 'center' }}>
                    LOGIN
                </Text>
                <Input
                    title='Username'
                    placeholder='Enter your Username'
                    keyboard={'default'}
                    inputBottomColor={'#03bafc'}
                />

                <Input
                    title='Password'
                    placeholder='Enter your Password'
                    keyboard={'default'}
                    isPassword={true}
                    inputBottomColor={'#03bafc'}
                />

                <TouchableOpacity style={{ color: '#03bafc', textAlign: "right", fontSize: 16 }}>
                    <Text>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>

                <LinearGradient colors={['#342a1f5', '#03bafc']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} onPress={() => { console.log('Handle OnPress') }}
                    style={{ borderRadius: 100, width: 150, alignSelf: 'center', alignItems: 'center', paddingVertical: 5, marginTop: 100, marginBottom: 10 }}>
                    <Text style={{ color: 'white', fontSize: 19 }}>
                        LOGIN
                    </Text>
                </LinearGradient>
                <Text style={{ color: '#03bafc', textAlign: "center", fontSize: 17 }}>
                    Don't have an account ?{'  '}
                    <Text onPress={() => navigation.navigate('Signup')}>
                        SignUp
                    </Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})