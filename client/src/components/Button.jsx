import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'

export default function Button(props) {
    const fillColor = props.color || COLORS.primary;
    const outLinedColor = COLORS.white;
    const bgColor = props.filled ? filedBgColor : outLinedColor;
    const textColor = props.filled ? COLORS.white : COLORS.primary;
  return (
    <TouchableOpacity onPress = {props.onPress} style = {{...styles.button}}>
      <Text style = {{fontSize:18}}>{props.text}</Text>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        paddingBottom:16,
        paddingVertical:10,
        borderColor:COLORS.primary,
        borderwidth:2,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
       
    }
})