import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import GetStarted from './src/screens/GetStarted.jsx';
import Profile from './src/screens/Profile.jsx';
import BookList from './src/screens/BookList.jsx';
import BottomTabNavigator from './BottomTabNavigator.jsx';

export default function App() {
  return (
    <BottomTabNavigator/>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
