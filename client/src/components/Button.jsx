import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
const Button = ({ icon, buttonTextHeight, height, width, borderColor, borderRadius, backgroundColor, value, onPress }) => {
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
      <Text style={{
        fontSize: buttonTextHeight
      }}>{value}</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <AntDesign name={icon} size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default Button;