import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollViewComponent } from 'react-native'
import React, { useState, useContext, useReducer, createContext } from 'react';
import { Feather, AntDesign } from '@expo/vector-icons';
import Button from './Button';
import { Context } from '../service/context/BookContext';
export default function BookCard({ product ,buttonText,isOrderScreen}) {

  const [isLiked, setIsLiked] = useState(false)
  const { dispatch } = useContext(Context);
  function proceedWithOrder(){
    console.log('Not Available');
  }
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: product.image }}
        style={styles.CoverImage} />
      <Text style={styles.title} numberOfLines={1}>
        {product.title}
      </Text>
      <Text style={styles.publisher}>
        {product.brand.author}
      </Text>
      <Text style={styles.price}>
        ${product.price}
      </Text>
      <TouchableOpacity style={styles.heart} onPress={() => setIsLiked(!isLiked)}>
        {isLiked ? (<AntDesign name="heart" size={24} color="#E55B5B" />)
          :
          (<Feather name="heart" size={20} color="#E55B5B" />)}
      </TouchableOpacity >
      <Button
        value={buttonText ||'Order Now'}
        backgroundColor={'orange'}
        height={30}
        borderRadius={20}
        width={'100%'}
        elevation={5}
        onPress={() => isOrderScreen ? proceedWithOrder() : dispatch({ type: 'ADD_ORDER', payload: product })} 

         />
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
    bottom: 320,
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