import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function Input ({onChangeText,inputBottomColor, title, placeholder, keyboard, isPassword })  {
  const inputRef = React.createRef();

  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 16, color: '#03bafc' }}>{title}</Text>
      <TextInput
       
        ref={inputRef} 
        placeholder={placeholder}
        placeholderTextColor='grey'
        style={{
          borderBottomColor: inputBottomColor || 'transparent',
          borderBottomWidth: 1,
          paddingVertical: 0,
          marginTop: 5,
        }}
        secureTextEntry={isPassword}
        keyboardType={keyboard}
        onFocus={() => inputRef.current.focus()}
        onChangeText={onChangeText}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
