import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Button,ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const image = '../img/login.jpg';
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Truyen',
      password: '123456',
    };
  }
  handleSignup = () =>{
    this.props.navigation.navigate('Signup')
  }
  handleLogin = () => {
    console.log('Đăng nhập với email:', this.state.email, 'và mật khẩu:',  this.state.password);
    if(this.state.password=="123456")
    {
      this.props.navigation.replace('Mytab',{data:{email:this.state.email,password:this.state.password}})
    }
    else
    {
      console.log('Sai tài khoản hoặc mật khâu');
    }
  };
componentDidMount()
{
  
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
            colors={['#00fbfc','#edd8eb']} // Màu gradient theo thứ tự từ trên xuống
            style={styles.gradient}
      >
          <Text style={styles.signupButtonText}>Đăng Nhập</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={this.handleSignup}>
          <LinearGradient
            colors={['#00fbfc','#edd8eb']} // Màu gradient theo thứ tự từ trên xuống
            style={styles.gradient}
          >
          <Text style={styles.signupButtonText}>Đăng ký</Text>
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
  },
  signupButtonText: {
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
