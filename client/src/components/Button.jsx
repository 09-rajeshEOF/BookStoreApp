import React from 'react';
import { View,Text, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';

const Button = ({ buttonTextHeight,height, width, borderColor, borderRadius, backgroundColor, value, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        height: height,
        width: width,
        borderColor: borderColor,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      <Text style = {{
        fontSize:buttonTextHeight
      }}>{value}</Text>
    </TouchableOpacity>
  );
};

export default Button;