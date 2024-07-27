import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import Button from '../components/Button';
import { AntDesign, Entypo, MaterialCommunityIcons, FontAwesome6, MaterialIcons } from '@expo/vector-icons';


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
                <View style={styles.optionsContainer}>
                    <View style={{ paddingTop: 10 }}></View>
                    <View style={styles.option}>
                        <MaterialCommunityIcons name="account-circle" size={24} color="black" />
                        <Button
                            height={70}
                            buttonTextHeight={25}
                            width="80%"
                            borderColor="#ddd"
                            borderRadius={10}
                            backgroundColor="#fff"
                            value="Accounts"
                            onPress={() => console.log('Option 1 pressed')}
                        />
                        <AntDesign name="right" size={24} color="black" />
                    </View>

                    <View style={styles.option}>
                        <Entypo name="dropbox" size={24} color="black" />
                        <Button
                            height={70}
                            buttonTextHeight={25}
                            width="80%"
                            borderColor="#ddd"
                            borderRadius={10}
                            backgroundColor="#fff"
                            value="Your Orders"
                            onPress={() => console.log('Option 2 pressed')}
                        />
                        <AntDesign name="right" size={24} color="black" />
                    </View>

                    <View style={styles.option}>
                        <FontAwesome6 name="gear" size={24} color="black" />
                        <Button
                            height={70}
                            width="80%"
                            buttonTextHeight={25}
                            borderColor="#ddd"
                            borderRadius={10}
                            backgroundColor="#fff"
                            value="Settings"
                            onPress={() => console.log('Option 3 pressed')}
                        />
                        <AntDesign name="right" size={24} color="black" />
                    </View>


                    <View style={styles.option}>
                        <MaterialIcons name="feedback" size={24} color="black" />
                        <Button
                            height={70}
                            width="80%"
                            buttonTextHeight={25}
                            borderColor="#ddd"
                            borderRadius={10}
                            backgroundColor="#fff"
                            value="Feedback"
                            onPress={() => console.log('Option 4 pressed')}
                        />
                        <AntDesign name="right" size={24} color="black" />
                    </View>
                    <View style={{ padding: 20, justifyContent: "center", flexDirection: "row" }}>
                    <Button
                        height={45}
                        width={45}
                        borderColor="#ddd"
                        borderRadius={22}
                        backgroundColor="#BBF022"
                        icon="logout"
                        onPress={() => {}}
                    />
                </View>
            </View>
        </View>
        </SafeAreaView >
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
    optionsContainer: {

    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 1,
        alignItems: 'center',
        marginHorizontal: .5,
        justifyContent: 'center',
        width: '98%',
        backgroundColor: "#fff",
        borderColor: '#ddd',
        borderRadius: 10,
        marginTop: 4,
    },
})