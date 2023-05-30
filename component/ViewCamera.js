import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, ScrollView , Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
const image = '../img/login.jpg';
class ViewCamera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos:null,
      Number_of_photo :20
    };
    
  }
  _handleButtonPress = () => {
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
  };
  _addImages = ()=> {
    this.state.Number_of_photo +=30
    this._handleButtonPress
  }
  openCamera = () => {
    this.props.navigation.navigate('Cam');
    this._handleButtonPress()
  }
  render() {
    return (
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

        <View>
          <Button title="Load more image" onPress={this._addImages}/>
          <Button title="Load Images" onPress={this._handleButtonPress} />
          <ScrollView>
            {this.state.photos &&
            this.state.photos.map((p, i) => {
              return (
                <Image
                  key={i}
                  style={{
                    width: 300,
                    height: 300,
                  }}
                  source={{ uri: p.node.image.uri }}
                />
              );
            })}
          </ScrollView>

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
    width: '70%',
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
  }

});

export default ViewCamera;
