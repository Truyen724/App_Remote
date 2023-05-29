import { RNCamera } from 'react-native-camera';
// import {ViewPropTypes} from 'deprecated-react-native-prop-types';
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Button,ImageBackground , Image ,ViewPropTypes } from 'react-native';
class Camera extends Component {
  constructor(props) {
    super(props);
  }
  takePicture = async () => {
    try {
      const data = await this.camera.takePictureAsync();
      console.log('Path to image: ' + data.uri);
    } catch (err) {
      // console.log('err: ', err);
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
           <View style={styles.captureContainer}>

          </View>
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
    space:{
      
      justifyContent: 'center',
      alignItems: 'center',
      height:"25%",
    }
    ,
    preview:{
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    captureContainer:{
      flex:0,
      alignSelf: "flex-end"
    },
    capture:{
      flex:1
    },
    image:{
      width: 70,
      height:70,
      // alignSelf: "flex-end"
    }
  });
export default Camera;