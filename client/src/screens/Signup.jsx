import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Input from '../components/Input'
export default function Signup({ navigation }) {
  return (
    <View>
      <LinearGradient colors={['#342a1f5', '#03bafc']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
        style={{
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          height: Dimensions.get('window').height * 0.20, width: '100%',
          alignItems: 'center',
          paddingTop: 40,

        }}
      >
        <Text style={{
          fonrSize: 31,
          color: 'white', fontWeight: 'bold'
        }}>
          Rajesh Pattanaik
        </Text>
      </LinearGradient>

      <View style={{ elevation: 10, backgroundColor: 'white', borderRadius: 10, margin: 10, marginTop: -20, paddingVertical: 20, paddingHorizontal: 15 }}>
        <Text style={{ fontSize: 19, fontWeight: 'bold', color: '303bafc', textAlign: 'center' }}>
          REGISTER
        </Text>
        <Input
          title='Email'
          placeholder='jhonwick@email.com'
          keyboard="email-address"
        />

        <Input
          title='Username'
          placeholder='Enter your Username'
          keyboard={'default'}
        />

        <Input
          title='Contact Number'
          placeholder='+91-9695*******'
          keyboard="number-pad"
        />
        <Input
          title='Password'
          placeholder='r@#gyuasgdyu867'
          keyboard={'default'}
          isPassword={true}
        />

        <Input
          title='Confirm Password'
          placeholder='r@#gyuasgdyu867'
          keyboard={'default'}
          isPassword={true}
        />

    

        <LinearGradient colors={['#342a1f5', '#03bafc']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} onPress={() => { console.log('Handle OnPress') }}
          style={{ borderRadius: 100, width: 150, alignSelf: 'center', alignItems: 'center', paddingVertical: 5, marginTop: 50, marginBottom: 10 }}>
          <Text style={{ color: 'white', fontSize: 19 }}>
            Signup
          </Text>
        </LinearGradient>
        <Text style={{ color: '#03bafc', textAlign: "center", fontSize: 17 }}>
          alreday have an account ?{'  '}
          <Text onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  )
}