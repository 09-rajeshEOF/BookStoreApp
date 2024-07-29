import { Dimensions, Text, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) { setError('Passwords do not match'); return; }
    if (!email.includes('@') || !email.includes('.')) { setError('Invalid email'); return; }
    if (password.length < 8) { setError('Password must be at least 8 characters'); return; }

    try {
      const storedUsers = await AsyncStorage.getItem('users');
      console.log('Stored Users:', storedUsers);
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      const user = { email, username, contactNumber, password };
      await AsyncStorage.setItem('users', JSON.stringify([...users, user]));
      console.log('Signup successful:', user);
      Alert.alert('Signup Successful',
        [
          {
            text: 'Go to Login',
            onPress: () => navigation.navigate('Login'),
          },
        ]
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
      <LinearGradient colors={['#342a1f5', '#03bafc']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.header}>
        <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>Sign Up</Text>
      </LinearGradient>
      <View style={styles.form}>
        <Text style={styles.RegisterText}>REGISTER</Text>
        <Input title="Email" placeholder="jhonwick@email.com" keyboard="email-address" inputBottomColor={'#03bafc'} onChangeText={(text) => setEmail(text)} />
        <Input title="Username" placeholder="Enter your Username" keyboard={'default'} inputBottomColor={'#03bafc'} onChangeText={(text) => setUsername(text)} />
        <Input title="Contact Number" placeholder="+91-9695*******" keyboard="number-pad" inputBottomColor={'#03bafc'} onChangeText={(text) => setContactNumber(text)} />
        <Input title="Password" placeholder="r@#gyuasgdyu867" keyboard={'default'} isPassword={true} inputBottomColor={'#03bafc'} onChangeText={(text) => setPassword(text)} />
        <Input title="Confirm Password" placeholder="r@#gyuasgdyu867" keyboard={'default'} isPassword={true} inputBottomColor={'#03bafc'} onChangeText={(text) => setConfirmPassword(text)} />
        {error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : null}
        <LinearGradient colors={['#342a1f5', '#03bafc']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.ButtonLinearGradient}>
          <Button
            value={'Signup'}
            backgroundColor={'yellow'}
            height={40}
            borderRadius={20}
            width={140}
            elevation={5}
            onPress={handleSignup}
          />
        </LinearGradient>
        <Text style={styles.ToLogin} >
          Already have an account?{' '}
          <Text onPress={() => navigation.navigate('Login')}>Login</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    height: Dimensions.get('window').height * 0.20,
    width: '100%',
    alignItems: 'center',
    paddingTop: 40,
  },
  form: {
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    marginTop: -20,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  RegisterText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#03bafc',
    textAlign: 'center',
  },
  ButtonLinearGradient: {
    borderRadius: 100,
    width: 150,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    marginTop: 50,
    marginBottom: 10,
  },
  errorText: { color: 'red', textAlign: 'center' },
  ToLogin: {
    color: '#03bafc',
    textAlign: 'center',
    fontSize: 17,
  }
})