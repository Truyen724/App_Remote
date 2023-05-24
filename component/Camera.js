import { RNCamera } from 'react-native-camera';
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Button,ImageBackground , Image } from 'react-native';
class Camera extends Component {
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
            <TouchableOpacity style={styles.capture} onPress={this.takePicture}>
             <Image
                source={require('../img/home.png')}
               
              />
              <Text>Take Photo</Text>
            </TouchableOpacity>
          </View>
        </RNCamera>

        <View style={styles.space} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 40,
    },
    title: {
      fontSize: 60,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    image: {
      width: '100%',
      height:'100%',
      fontSize: 60,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 40,
      
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
      fontSize:19
    },
  
    loginButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
  
    },
  
    buttonArea: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
  
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
  
    loginButton: {
      width: '70%',
      height: 40,
      paddingHorizontal: 10,
      marginBottom: 10,
      fontWeight: 'bold',
      borderRadius:10
    },
    gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:10,
      opacity:0.5
    }
  
  });
export default Camera;