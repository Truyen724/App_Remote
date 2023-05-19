import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Button } from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Truyen',
      password: '123456',
    };
  }

  handleLogin = () => {
    console.log('Đăng nhập với email:', this.state.email, 'và mật khẩu:',  this.state.password);
    if(this.state.email=="Truyen" & this.state.password=="123456")
    {
      this.props.navigation.navigate('Main', { data:"Xin ch" } )
    }
    else
    {
      console.log('Sai tài khoản hoặc mật khâu');
    }
  };

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
        <View style={styles.buttonArea}>
          <Button
            style = {styles.loginButton}
            title="Đăng nhập"
            onPress={this.handleLogin}
          />
        </View>

        <View  style={styles.buttonArea}>
        <Button
            style = {styles.loginButton}
            title="Don't have an account? Sign Up"
            onPress={() => this.props.navigation.navigate('Signup')}
          />
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
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
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
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default LoginScreen;
