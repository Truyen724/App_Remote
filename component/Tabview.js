import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, ImageBackground, Image } from 'react-native';
import React, { Component } from 'react';

import SignupScreen from './Signup';
import MainScreen from './Main';
import LoginScreen from './Logout';
import ViewCamera from './ViewCamera';
const Tab = createBottomTabNavigator();

class MyTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.route.params.data
    };
  }
  componentDidMount() {
  }
  componentDidUpdate() {
  }
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Main" component={MainScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                style={{ tintColor: color, width: size, height: size }}
                source={require('./../img/home.png')}
              />
            ),
          }}
        />
        <Tab.Screen name="Signup" component={SignupScreen} options={{
          title: "Đăng kí",
          tabBarIcon: ({ color, size }) => (
            <Image
            source={require('./../img/registration.png')}
              style={{ tintColor: color, width: size, height: size }}
              
            />
          ),
        }}
        />
        <Tab.Screen name="Camera" component={ViewCamera} options={{
          title: "Camera",
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Image
              style={{ tintColor: color, width: size, height: size }}
              source={require('./../img/camera.png')}
            />
          ),
        }}
        />
        <Tab.Screen name="Logout" component={LoginScreen} options={{
          title: "Đăng Xuất",
          tabBarIcon: ({ color, size }) => (
            <Image
              style={{ tintColor: color, width: size, height: size }}
              source={require('./../img/logout.png')}

            />
          ),
        }}
          initialParams={{ data: this.state.data }}
        />
      </Tab.Navigator>

    );
  }
}
export default MyTabs
