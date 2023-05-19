/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {PropsWithChildren} from 'react';
import LoginScreen from './component/Login';
import SignupScreen from './component/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppMain from './component/AppMain';
import {

  View,
} from 'react-native';

function App(): JSX.Element {
  return (
    <View>
      <AppMain/>
    </View>
  )
}


export default App;
