import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class MainScreen extends Component {
  constructor(props, route) {
    super(props);
    this.state = {
        fullName:"",
        data:''
    };
  
  }
  componentDidMount(){
    const { data } = this.props.route.params;
    
    this.setState({
    data
    });
    }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Thiết lập wifi</Text>
        <TextInput
          style={styles.input}
          placeholder={this.state.data}
        //   value={this.state.data}
          // onChangeText={(fullName) => this.setState({ fullName })}
        />

        {/* <TextInput
          style={styles.input}
          placeholder="Nhập mật khẩu wifi"
          value={this.state.data.email}
          onChangeText={(email) => this.setState({ email })}
        />
        <TouchableOpacity style={styles.signupButton} onPress={this.handleSignup}>
          <Text style={styles.signupButtonText}>Kết nối tới wifi</Text>
        </TouchableOpacity>
        <View style={{marginTop:20}}></View>
        <Text style={styles.title}> Thiết lập Server</Text>
        <TextInput
          style={styles.input}
          placeholder="Đường Dẫn Tới Server"
          secureTextEntry
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity style={styles.signupButton} onPress={this.handleSignup}>
          <Text style={styles.signupButtonText}>Thay đổi thông tin server</Text>
        </TouchableOpacity> */}
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
