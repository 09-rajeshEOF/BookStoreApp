import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import Header from '../components/Header'
import Input from '../components/Input';

export default function HomeScreen() {
    return (
        <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
            <Header />
            <View style={styles.headerSpacer} />
            <View style={styles.headreImage}>
                {/* Add your image or content here */}
            </View>
            <View style={styles.searchbarContainer}>
                <TouchableOpacity style={{ position: 'absolute', left: 5 }} pointerEvents='box-none'>
                    <Feather name="search" size={26} color="grey" />
                </TouchableOpacity>
                <View style={{ marginTop:-22,marginLeft:-200}}>
                    <Input keyboard="default" />
                </View>

            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerSpacer: {
        height: 55,
    },
    headreImage: {
        paddingBottom: 5,
    },
    searchbarContainer: {
        backgroundColor: 'white',
        height: 44,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        marginTop: 5,
        //   paddingHorizontal:10,
        marginHorizontal: 10
    },
});

