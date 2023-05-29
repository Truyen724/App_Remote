import 'react-native-gesture-handler';
import React from 'react';
import  {FlatList, View,Text} from 'react-native';
import LoginScreen from './Login';
import SignupScreen from './Signup';
import MainScreen  from './Main';
import MyTabs from './Tabview'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Camera from './Camera';
const Stack = createNativeStackNavigator();
function AppMain() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown : false}} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown : false}} />
        <Stack.Screen name="Mytab" component={MyTabs} options={{headerShown : false}} />
        <Stack.Screen name="Cam" component={Camera} options={{headerShown : false}} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}


export default AppMain;
