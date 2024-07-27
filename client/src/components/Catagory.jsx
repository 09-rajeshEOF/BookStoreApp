import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Catagory({item,selectedCatagory,setSelectedCatagory}) {
  return (
    
    <TouchableOpacity onPress = {() => setSelectedCatagory(item)}>
      <Text style = {[styles.CatagoryText,selectedCatagory === item && {color:'#FFFFFF',backgroundColor:'#E96E6E'}]}>{item.name}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create(
    {
        CatagoryText:{
            fontSize:16,
            fontWeight:'bold',
            color:'#938F8F',
            backgroundColor:'#DFDCDC',
            paddingVertical:10,
            paddingHorizontal:20,
            margin:10,
            textAlign:'center',
            borderRadius:20
          
        }
    })