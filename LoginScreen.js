import React, { useState } from 'react';
import { View, Text,TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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





function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLogin = async () => {
    try {
      // Sign in with the entered email and password
      const userCredential = await signInWithEmailAndPassword(Auth, username, password);
      const user = userCredential.user;

      // Save the logged-in user's information for future logins
      try {
        await AsyncStorage.setItem('userCredentials', JSON.stringify({ username, password }));
        console.log('User credentials saved.');
      } catch (error) {
        console.log('Error occurred while saving user credentials:', error);
      }

      navigation.navigate('Search');
    } catch (error) {
      console.log('Error occurred while logging in:', error);
      setLoginError(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Log In</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {loginError && <Text style={styles.errorText}>Invalid username and/or password</Text>}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;