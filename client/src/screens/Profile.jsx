import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import Button from '../components/Button';
import AntDesign from '@expo/vector-icons/AntDesign';

const PFP = "";

export default function Profile() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.profile}>
                    <TouchableOpacity onPress={() => { }} style={styles.PFP_Wrapper}>
                        <View>
                            <Image source={require('./../../assets/screens/profile/img_avatar.png')} style={styles.profileAvatar} />
                            <View style={styles.PFPedit}>
                                <AntDesign name="edit" size={20} color="black" />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.name}>
                        Jhon Wick
                    </Text >
                    <Text>
                        example@gmail.com
                    </Text>
                    <Text style={styles.address}>
                        Bhubaneswar,Gopabandhu Street, 751001
                    </Text>
                </View>
                <View style={styles.options}>
                    <Button
                        value='Edit Profile'
                        buttonTextHeight={25}
                        height={70}
                        borderColor="#ddd"
                        borderRadius={10}
                        backgroundColor="#fff" />
                    <Button
                        value='Accounts'
                        buttonTextHeight={25}
                        height={70}
                        borderColor="#ddd"
                        borderRadius={10}
                        backgroundColor="#fff" />
                    <Button
                        value='Accounts'
                        buttonTextHeight={25}
                        height={70}
                        borderColor="#ddd"
                        borderRadius={10}
                        backgroundColor="#fff" />
                    <Button
                        value='Orders'
                        buttonTextHeight={25}
                        height={70}
                        borderColor="#ddd"
                        borderRadius={10}
                        backgroundColor="#fff" />
                    <Button
                        value='LogOut'
                        buttonTextHeight={25}
                        height={70}
                        borderColor="#ddd"
                        borderRadius={10}
                        backgroundColor="#fff" />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 25
    },
    profile: {
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        marginTop: 20,
        fontSize: 19,
        fontWeight: 'bold',
        color: '#414d63',
        textAlign: 'center'
    },
    address: {
        marginTop: 5,
        fontSize: 10,
        textAlign: 'center',
        color: '989898'
    },
    PFP_Wrapper: {
        position: 'absolute'
    },
    profileAvatar: {
        width: 100,
        height: 100,
        borderRadius: 65,
    },
    PFP_Wrapper: {

    },
    PFPedit: {
        width: 25,
        height: 25,
        borderRadius: 12,
        backgroundColor: 'grey',
        position: 'absolute',
        right: -3,
        bottom: -1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    options: {
        justifyContent:'center',
        alignItems:'center',
        elevation:10,
        backgroundColor:'#faebd7'
    }
})