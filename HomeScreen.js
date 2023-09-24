
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import styles from './styles';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.Homecontainer}>
      <ImageBackground
        source={require('./assets/HomeScreenBackground.png')}
        style={styles.backgroundImage}
      >
      <Image
        source={require('./assets/AutoMartLogo.png')}
        style={styles.Logoimage}
      />
        <View style={styles.contentContainer}>
          <Text style={styles.LogoText}>AutoMart</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.login_sign_button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.login_sign_button} onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}



export default HomeScreen;

