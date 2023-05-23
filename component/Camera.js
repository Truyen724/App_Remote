import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RNCamera, FaceDetector } from 'react-native-camera';

const image = '../img/login.jpg';
class Camera extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.loginButton} onPress={this.handleSignup}>
                    <LinearGradient
                        colors={['#00fbfc', '#edd8eb']} // Màu gradient theo thứ tự từ trên xuống
                        style={styles.gradient}
                    >
                        <Text style={styles.signupButtonText}>Camera</Text>
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
    signupButtonText: {
        color: 'gray',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Camera;
