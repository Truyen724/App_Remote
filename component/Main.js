import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { NavigationActions, CommonActions } from 'react-navigation';
class MainScreen extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      fullName: "",
      wifiname: "",
      password: "",
      serverName: "",
      id_device: "",
      secret_password: "",
    };
  }
  componentDidMount() {
    console.log(this.props.route.params.data)
  }
  reset_Nav = () => {
    this.props.navigation.reset({
      index: 0,
      routes: [

        { name: 'Login' }

      ],
    })
  }
  set_wifi = async () => {
    try {
      console.log(this.state.wifiname)
      fetch('192.168.4.22/set_ssid', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: this.state.wifiname
      });
    }
    catch {
      // console.error(error);
      console.log("lỗi ")
    }
  }
  set_password = async () => {
    try {
      console.log(this.state.password)
      fetch('http://192.168.4.22:80/set_password', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: this.state.password
      });
      if (!response.ok) {
        // Xử lý lỗi theo cách khác
        console.log('Request failed:', response.status);
        return;
      }
      const data = await response.text();
      console.log(data);
    }
    catch {
      // console.error(error);
      console.log("lỗi ")
    }
  }
  set_server = async () => {
    try {
      console.log(this.state.password)
      fetch('http://192.168.4.22:80/set_server', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: this.state.serverName
      });
      if (!response.ok) {
        // Xử lý lỗi theo cách khác
        console.log('Request failed:', response.status);
        return;
      }
      const data = await response.text();
      console.log(data);
    }
    catch {
      // console.error(error);
      console.log("lỗi ")
    }
  }
  check_secret_key  = () => {
    if (this.state.secret_password == "truyen") {
      this.set_id_device()
    }
    else {
      Alert.alert("Looxiii rồi ")
    }
  }
  set_id_device = async () => {
    try {
      console.log(this.state.password)
      fetch('http://192.168.4.22:80/set_id_device', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: this.state.id_device
      });
      if (!response.ok) {
        // Xử lý lỗi theo cách khác
        console.log('Request failed:', response.status);
        return;
      }
      const data = await response.text();
      console.log(data);
    }
    catch {
      // console.error(error);
      console.log("lỗi ")
    }
  }
  set_wifi_pass = () => {
    try {
      console.log(this.state.wifiname)
      this.set_wifi()
      this.set_password()
    }
    catch {
      console.log("Lỗi")
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
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
          <TouchableOpacity style={styles.signupButton} onPress={this.set_wifi&&this.set_password}>
            <Text style={styles.signupButtonText}>Kết nối tới wifi</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 20 }}></View>
          <Text style={styles.title}> Thiết lập Server</Text>
          <TextInput
            style={styles.input}
            placeholder="Đường Dẫn Tới Server"
            value={this.state.serverName}
            onChangeText={(serverName) => this.setState({ serverName })}
          />
          <TouchableOpacity style={styles.signupButton} onPress={this.set_server}>
            <Text style={styles.signupButtonText}>Thay đổi thông tin server</Text>
          </TouchableOpacity>

          <View style={{ marginTop: 20 }}></View>
          <Text style={styles.title}> Set ID device</Text>
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu nhà phát  triển "
            value={this.state.secret_password}
            onChangeText={(secret_password) => this.setState({ secret_password })}
          />
          <TextInput
            style={styles.input}
            placeholder="ID Thiết bị"
            value={this.state.id_device}
            onChangeText={(id_device) => this.setState({ id_device })}
          />
          <TouchableOpacity style={styles.signupButton} onPress={this.check_secret_key}>
            <Text style={styles.signupButtonText}>Thay đổi id_thiết bị</Text>
          </TouchableOpacity>
        </ScrollView>
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
