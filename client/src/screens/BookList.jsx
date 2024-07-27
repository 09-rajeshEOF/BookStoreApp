import { SafeAreaView, StyleSheet, Text, View,StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import {  } from 'expo-status-bar'
import BookCard from '../components/BookCard'


export default function BookList() {
  return (
    <SafeAreaView style = {{flex:1}}>
            <StatusBar barStyle={'dark-content'} />
            <ScrollView>
                <TouchableOpacity>

                </TouchableOpacity>
            </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})