import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function ProfileScreen({ navigation }) {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, retrieve the email from Firebase
        const emailFromFirebase = user.email;

        setEmail(emailFromFirebase);
      } else {
        // User is signed out, handle the case accordingly
        setEmail('');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleCardInfo = () => {
    navigation.navigate('CardInfo');
  };

  const handleLogout = () => {
    AsyncStorage.removeItem('userId')
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      })
      .catch((error) => {
        console.log('Error occurred while logging out:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.EmailTitle}>{email}</Text>

      {/* Options */}
      <TouchableOpacity style={styles.CardInfoButton} onPress={handleCardInfo}>
        <Text style={styles.buttonText}>Card Information</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.LogoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center', 
      },
    EmailTitle:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 0,
      },
    CardInfoButton:{
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 500,
        width: 250
      },
    LogoutButton:{
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: 250
      },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
      },
  });

export default ProfileScreen;

