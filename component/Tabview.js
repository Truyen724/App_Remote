import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, ImageBackground } from 'react-native';
import React, { Component } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignupScreen from './Signup';
import MainScreen from './Main';
const Tab = createBottomTabNavigator();
function MyTabBar({ navigation }) {
  return (
    <Button
      title="Go somewhere"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate('SomeScreen');
      }}
    />
  );
}
class MyTabs extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Main" component={MainScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }} />
        <Tab.Screen name="Signup" component={SignupScreen} options={{
          title: "Đăng kí",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}

        />
      </Tab.Navigator>
    );
  }
}
export default MyTabs
const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    backgroundColor: "#1ef63d",
    height: 100
  }
})