import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
const inputRef = React.createRef();

export default function Input({inputBottomColor,title,placeholder,keyboard,isPassword}) {
    return (
        <View style={{ marginVertical: 10 }} >
            <Text style={{ fontSize: 16, color: '#03bafc' }}>
                {title}
            </Text>

            <TextInput
                placeholder={placeholder}
                placeholderTextColor='grey'
                style={{
                    borderBottomColor:inputBottomColor || 'transparent', 
                    borderBottomWidth: 1,
                    paddingVertical: 0,
                    marginTop: 5,
                    
                }}
                secureTextEntry={isPassword}
                keyboardType={keyboard}
                onFocus={() => inputRef.current.focus()}

            />
        </View>
    )
}

const styles = StyleSheet.create({})