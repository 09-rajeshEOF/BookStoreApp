import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import Header from '../components/Header'
import Input from '../components/Input';
import Catagory from '../components/Catagory';
import * as catagories from './../../LocalData/Catagories.json'
import * as products from './../../LocalData/Products.json'
import BookCard from '../components/BookCard';

export default function HomeScreen() {
    const [selectedCatagory, setSelectedCatagory] = useState(false);
    return (
        <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
            <Header />
            <View style={styles.headerSpacer} />
            <View style={styles.headreImage}>
                {/* Add your image or content here */}
            </View>

            <View style={styles.searchbarContainer}>
                <TouchableOpacity style={styles.iconContainer} pointerEvents='box-none'>
                    <Feather name="search" size={26} color="grey" />
                </TouchableOpacity>
                <View style={{ marginTop: -22, marginLeft: -200 }}>
                    <Input keyboard="default" />
                </View>
            </View>

            <FlatList
                numColumns={2}
                ListHeaderComponent={
                    <>
                        <FlatList
                            data={catagories.default.flatMap(category => category.subCategories)}
                            renderItem={({ item }) =>
                                <Catagory item={item}
                                    selectedCatagory={selectedCatagory}
                                    setSelectedCatagory={setSelectedCatagory} />}
                            keyExtractor={(item) => (item.id)}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false} />
                    </>
                }
                data={() => { }}
                renderItem={({ item }) =>
                    <BookCard />}
                keyExtractor={(item) => (item.id)}

                showsHorizontalScrollIndicator={false} />

<View style={{ flexDirection: 'row' }}>
                <BookCard />
                <BookCard />
            </View>

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
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
        marginHorizontal: 10,
        flexDirection: 'row'
    },
    iconContainer: {
        position: 'absolute',
        left: 5,
        marginHorizontal: 5
    }
});

