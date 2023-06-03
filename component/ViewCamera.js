import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, ScrollView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import Image_com from './image';
import { PermissionsAndroid, Platform } from "react-native";
const image = '../img/login.jpg';
class ViewCamera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: null,
      Number_of_photo: 20
    };
  }
  async hasAndroidPermission() {
    const permission = Platform.Version >= 33 ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
  
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }
  
    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  _handleButtonPress = () => {
    if (Platform.OS === "android" && !(this.hasAndroidPermission())) {
      return;
    }
    else
    {

    CameraRoll.getPhotos({
      first: this.state.Number_of_photo,
      assetType: 'Photos',
    })
      .then(r => {
        this.setState({ photos: r.edges });

      })
      .catch((err) => {
        //Error Loading Images
      });
            
    }
  };
  _addImages = () => {
    this.setState({
      Number_of_photo: this.state.Number_of_photo + 20
    })
    console.log(this.state.Number_of_photo)
    this._handleButtonPress()
  }
  openCamera = () => {
    this.props.navigation.navigate('Cam');
  }
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>This is Camera</Text>
        <Text style={styles.text} >{this.state.email}</Text>
        <TouchableOpacity style={styles.loginButton} onPress={this.openCamera}>
          <LinearGradient
            colors={['#00fbfc', '#edd8eb']} // Màu gradient theo thứ tự từ trên xuống
            style={styles.gradient}
          >
            <Text style={styles.signupButtonText}>Open Camera</Text>
          </LinearGradient>
        </TouchableOpacity>
       
          <TouchableOpacity style={styles.loginButton} onPress={this._handleButtonPress}>
            <LinearGradient
              colors={['#00fbfc', '#edd8eb']} // Màu gradient theo thứ tự từ trên xuống
              style={styles.gradient}
            >
              <Text style={styles.signupButtonText}>Load Images</Text>
            </LinearGradient>
          </TouchableOpacity>
          <ScrollView style={styles.scroll}> 
            {this.state.photos &&
              this.state.photos.map((p, i) => {
                return (
                  <Image_com
                    key={i}
                    url_image={p.node.image.uri}
                    pref={this}
                  />
                );
              })}
          </ScrollView>
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

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
    height: '100%',
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
    fontSize: 19
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
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    borderRadius: 10
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    opacity: 0.5
  },
  scroll: {
    flex:1
  }

});

export default ViewCamera;
