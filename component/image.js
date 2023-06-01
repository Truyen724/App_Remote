import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, ImageBackground, Image } from 'react-native';
import React, { Component } from 'react';

const Image_com = (props) => {
  
  const {url_image,pref} = props
    return (
    <View>
        <Image source={{ uri: url_image}}
         style={{
                    width: 300,
                    height: 300,
                  }}
                  >
        </Image>
        <Button onPress={pref.openCamera} title='Navigate'></Button>
    </View>
    );
}
export default Image_com
