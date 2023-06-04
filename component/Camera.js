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
class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraType : RNCamera.Constants.Type.back,
    }
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
  switchCamera = () => {
    const { cameraType } = this.state;
    const newCameraType =
      cameraType === RNCamera.Constants.Type.back
        ? RNCamera.Constants.Type.front
        : RNCamera.Constants.Type.back;
    this.setState({ cameraType: newCameraType });
  };
  go_back=()=>{
    this.props.navigation.navigate('Camera')
  }
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.preview}
          ratio="4:3"
          type={this.state.cameraType}
        >
        </RNCamera>
        <View style={styles.space} >
          <TouchableOpacity style={styles.capture} onPress={this.go_back}>
            <Image
              source={require('../img/turn-back.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.capture} onPress={this.takePicture}>
            <Image
              source={require('../img/camera.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.capture} onPress={this.switchCamera}>
            <Image
              source={require('../img/switch-camera.png')}
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
    padding:0,
    marginBottom:50
  },        
  space: {
    flex:0,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  
    // backgroundColor:"black"
  }
  ,
  preview: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  capture: {
    flex: 0,
    paddingLeft:30,
    paddingRight:30,
    paddingTop:10,
  },
  image: {
    width:50,
    height: 50,
    // alignSelf: "flex-end"
  }
});
export default Camera;