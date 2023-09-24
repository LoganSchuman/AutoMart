import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles'

const LocationScreen = () => {
  const [location, setLocation] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleLocationChange = (text) => {
    setLocation(text);
  };

  const handleSave = () => {
    setIsSaved(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>What is your location?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your location"
        value={location}
        onChangeText={handleLocationChange}
      />
      {isSaved && <Text style={Locstyles.savedText}>Saved</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSave}> 
      <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity> 


    </View>
  );
};

const Locstyles = StyleSheet.create({

  savedText: {
    fontSize: 16,
    color: 'green',
    marginTop: 10,
  }

});

export default LocationScreen;

