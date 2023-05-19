import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class MainScreen extends Component {
  constructor(props, route) {
    super(props);
    this.state = {
        fullName:"",
        wifiname:"",
        password:"",
         serverName:""

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Thiết lập wifi</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập vào tên wifi"
          value={this.state.wifiname}
          onChangeText={(wifiname) => this.setState({ wifiname })}
        />
       <TextInput
          style={styles.input}
          placeholder="Nhập mật khẩu wifi"
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity style={styles.signupButton} onPress={this.handleSignup}>
          <Text style={styles.signupButtonText}>Kết nối tới wifi</Text>
        </TouchableOpacity>
        <View style={{marginTop:20}}></View>
        <Text style={styles.title}> Thiết lập Server</Text>
        <TextInput
          style={styles.input}
          placeholder="Đường Dẫn Tới Server"
          value={this.state.serverName}
          onChangeText={(serverName) => this.setState({ serverName })}
        />
        <TouchableOpacity style={styles.signupButton} onPress={this.handleSignup}>
          <Text style={styles.signupButtonText}>Thay đổi thông tin server</Text>
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
    fontSize: 40,
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

export default MainScreen;
