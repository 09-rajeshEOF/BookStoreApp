import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

export default function Input({title,placeholder,keyboard,isPassword}) {
    return (
        <View style={{ marginVertical: 10 }} >
            <Text style={{ fontSize: 16, color: '#03bafc' }}>
                {title}
            </Text>

            <TextInput
                placeholder={placeholder}
                placeholderTextColor='grey'
                style={{
                    borderBottomColor: '#03bafc',
                    borderBottomWidth: 1,
                    paddingVertical: 0,
                    marginTop: 5,
                }}
                secureTextEntry={isPassword}
                keyboardType={keyboard}
            />
        </View>
    )
}

const styles = StyleSheet.create({})