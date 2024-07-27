import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollViewComponent } from 'react-native'
import React, { useState } from 'react';
import { Feather, AntDesign } from '@expo/vector-icons';
import Button from './Button';

export default function BookCard({product}) {
  
  const [isLiked, setIsLiked] = useState(false)
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require('./../../assets/CoverImages/into-the-shadows.png')}
        style={styles.CoverImage} />
      <Text style={styles.title}>
        {product.name}
      </Text>
      <Text style={styles.publisher}>
        {product.brand.name}
      </Text>
      <Text style={styles.price}>
        ${product.price}
      </Text>
      <TouchableOpacity style={styles.heart} onPress={() => setIsLiked(!isLiked)}>
        {isLiked ? (<AntDesign name="heart" size={24} color="#E55B5B" />)
          :
          (<Feather name="heart" size={20} color="#E55B5B" />)}
      </TouchableOpacity>
      <Button
      value = {'Order Now'}
      backgroundColor={'yellow'}
      height={30}
      borderRadius={20}
      width = {'100%'}
      elevation={5}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, marginVertical: 5, marginHorizontal: 10
  },
  CoverImage: {
    height: 256,
    width: 167,
    borderRadius: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444444',
    marginLeft: 3,
  },
  price: {
    color: '#9C9C9C',
    fontWeight: '400',
    marginLeft: 3,
  },
  publisher: {
    marginLeft: 3,
  },
  heart: {
    left: 135,
    bottom: 290,
    height: 30,
    width: 30,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 25
  }
})