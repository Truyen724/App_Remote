import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
    };
  }

  handleSignup = () => {
    const { fullName, email, password } = this.state;
    // Xử lý đăng ký tại đây
    console.log('Đăng ký với tên đầy đủ:', fullName, 'email:', email, 'và mật khẩu:', password);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Đăng ký</Text>

        <TextInput
          style={styles.input}
          placeholder="Họ và tên"
          value={this.state.fullName}
          onChangeText={(fullName) => this.setState({ fullName })}
        />

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

        <TouchableOpacity style={styles.signupButton} onPress={this.handleSignup}>
          <Text style={styles.signupButtonText}>Đăng ký</Text>
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
    padding: 20,
  },
  title: {
    fontSize: 24,
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
  signupButton: {
    width: '100%',
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignupScreen;
