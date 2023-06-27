import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, ImageBackground, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BackHandler } from 'react-native';

const image = '../img/login.jpg';
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'truyen',
      password: 'ntt2432001',
      accessToken: 'undefined'
    };
  }
  handleSignup = () => {
    this.props.navigation.navigate('Signup')
  }
  handleLogin = () => {
    fetch('http://116.118.49.43:3000/api/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.email,
        password: this.state.password
      }),
    }).then((response) => response.json())
      .then((data) => {

        if (data.hasOwnProperty('accessToken')) {
          this.state.accessToken = data.accessToken;
          console.log(this.state.accessToken);
          Alert.alert('Đăng nhập thành công');
          this.props.navigation.replace('Mytab', { data: { email: this.state.email, password: this.state.password, accessToken: this.state.accessToken } })
        }
        else {
          Alert.alert('Sai tài khoản mật khẩu');
        }

      });
  }
  componentDidMount() {

  }
  exitApp = () => {
    // Tắt ứng dụng
    if (Platform.OS === 'android') {
      BackHandler.exitApp();
    } else {
      // Xử lý tắt ứng dụng trên nền tảng iOS
      // Ví dụ: AppState.exitApp()
    }
  }

  render() {
    return (
      <View style={styles.container}>


        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
        />

        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
        />

        <TouchableOpacity style={styles.loginButton} onPress={this.handleLogin}>
          <LinearGradient
            colors={['#00fbfc', '#edd8eb']} // Màu gradient theo thứ tự từ trên xuống
            style={styles.gradient}
          >
            <Text style={styles.signupButtonText}>Đăng Nhập</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={this.exitApp}>
          <LinearGradient
            colors={['#00fbfc', '#edd8eb']} // Màu gradient theo thứ tự từ trên xuống
            style={styles.gradient}
          >
            <Text style={styles.signupButtonText}>Thoát</Text>
          </LinearGradient>
        </TouchableOpacity>
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
  },
  signupButtonText: {
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;