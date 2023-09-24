import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles'
import { StyleSheet } from 'react-native';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA239p5xuv72rVFXeCtTTTE8P9QBuFBupU",
  authDomain: "auto-auth-1dbc9.firebaseapp.com",
  projectId: "auto-auth-1dbc9",
  storageBucket: "auto-auth-1dbc9.appspot.com",
  messagingSenderId: "348259222251",
  appId: "1:348259222251:web:646c2c08643b77c8e8f4ae",
  measurementId: "G-MWY36Y3607"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);


function SignUpScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSignUp = async () => {
      try {
        // Create a new user in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(Auth, email, password);
        const user = userCredential.user;
    
        // Save the user's city in Firebase or any other necessary operations
        // ...
    
        // Save the user's login information
        try {
          await AsyncStorage.setItem('userCredentials', JSON.stringify({ email, password }));
          console.log('User credentials saved.');
        } catch (error) {
          console.log('Error occurred while saving user credentials:', error);
        }
    
        // Navigate to the login screen
        navigation.navigate('Login', { email, password });
      } catch (error) {
        console.log('Error occurred while signing up:', error);

        if (error.code === 'auth/email-already-in-use') {
          setMessage('auth/email-already-in-use');
        } 
        else {
         console.log('An error occurred while signing up. Please try again.');
        }
      }
    };
    
  
    return (
      <View style={styles.container}>
        <ImageBackground
        source={require('./assets/SignLogBackground.png')}
        style={styles.backgroundImage}
      >
  
        <Text style={SignUpstyles.signuptext}></Text>
        <Text style={SignUpstyles.signuptext}>Welcome!</Text>

      
        <TextInput
          style={SignUpstyles.emailInput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={SignUpstyles.passwordInput}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
  
  
        <TouchableOpacity style={SignUpstyles.button} onPress={handleSignUp}>
          <Text style={SignUpstyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {message === 'auth/email-already-in-use' && (

          <Text>That email is already in use</Text>
        
      )}
        </ImageBackground>
      </View>
    );
  }

  const SignUpstyles = StyleSheet.create({

    signuptext: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 100,
      marginLeft: 30
    },
    emailInput: {
      width: '80%',
      height: 40,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: 'white',
      marginBottom: 10,
      marginTop: 300,
      marginLeft: 35,
      paddingHorizontal: 10,
    },
    passwordInput: {
      width: '80%',
      height: 40,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: 'white',
      marginBottom: 10,
      marginLeft: 35,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      marginTop: 100,
      marginLeft: 125,
      width:100,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 10
      
    },
  })

  export default SignUpScreen;