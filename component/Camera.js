import { RNCamera } from 'react-native-camera';
// import {ViewPropTypes} from 'deprecated-react-native-prop-types';
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, ImageBackground, Image, ViewPropTypes } from 'react-native';
import { PermissionsAndroid, Platform } from "react-native";
import { CameraRoll } from "@react-native-camera-roll/camera-roll";

async function hasAndroidPermission() {
  const permission = Platform.Version >= 33 ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
}

async function savePicture() {

};

class Camera extends Component {
  constructor(props) {
    super(props);
  }
  takePicture = async () => {
    try {
      const data = await this.camera.takePictureAsync();
      console.log('Path to image: ' + data.uri);
      if (Platform.OS === "android" && !(await hasAndroidPermission())) {
        return;
      }
      CameraRoll.save(data.uri, { type:'photo'})  
    } catch (err) {
      console.log('err: ', err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.preview}
        >
        </RNCamera>
        <View style={styles.space} >
          <TouchableOpacity style={styles.capture} onPress={this.takePicture}>
            <Image
              source={require('../img/camera.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },        
  space: {
    justifyContent: 'center',
    alignItems: 'center',
    height: "25%",
  }
  ,
  preview: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  capture: {
    flex: 1
  },
  image: {
    width: 70,
    height: 70,
    // alignSelf: "flex-end"
  }
});
export default Camera;