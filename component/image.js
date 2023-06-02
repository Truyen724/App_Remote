import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, ImageBackground, Image } from 'react-native';
import React, { Component } from 'react';

const Image_com = (props) => {
  
  const {url_image,pref} = props
    return (
    <View style={styles.container}>
        <Image source={{ uri: url_image}}
         style={{
                    width: 300,
                    height: 300,
                    
                  }}
                  >
        </Image>
        <View style={styles.Button}>
          <Button  title='Delete'></Button>
          <Button title='View'></Button>
          <Button  title='Navigate'></Button>
        </View>
    </View>
    );
}
export default Image_com
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    padding:20
  },
  Button:{
    flex:1 ,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

});
