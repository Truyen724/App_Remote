import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Button,ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const image = '../img/login.jpg';
class LogoutScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:this.props.route.params.data.email,
            password:this.props.route.params.data.password
        };
      }
      componentDidMount()
      {
        console.log(this.state.email);
      }
      HomeScreen = () => {
        this.props.navigation.navigate('Main')

      }
      signIn = () => {
        this.props.navigation.replace('Login')
      }
  render() {
    return (
      <LinearGradient
      colors={['#c6ffdd', '#fbd786','#f7797d']} 
      style={styles.container}
    >
        <Text style={styles.title}>Log Out</Text>
        <Text style={styles.text} >{this.state.email}</Text>
        <TouchableOpacity style={styles.loginButton} onPress={this.HomeScreen}>
          <LinearGradient
            colors={['#00fbfc','#edd8eb']} // Màu gradient theo thứ tự từ trên xuống
            style={styles.gradient}
      >
          <Text style={styles.signupButtonText}>Quay lại</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={this.signIn}>
          <LinearGradient
            colors={['#00fbfc','#edd8eb']} // Màu gradient theo thứ tự từ trên xuống
            style={styles.gradient}
          >
          <Text style={styles.signupButtonText}>Log Out</Text>
          </LinearGradient>
        </TouchableOpacity>
        </LinearGradient>

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

export default LogoutScreen;
