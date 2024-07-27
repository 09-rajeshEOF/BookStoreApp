import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Header() {
    return (
        <View style={{justifyContent:'row'}}>
            <TouchableOpacity style = {styles.gridDot}>
                <MaterialCommunityIcons name="dots-grid" size={30} color="red" />
            </TouchableOpacity>
            <TouchableOpacity style = {styles.account}>
                <MaterialCommunityIcons name="account-circle" size={35} color="red" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    account: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 2,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
    gridDot: {
        position: 'absolute',
        top: 20,
        left: 20,
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 5,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
    
})