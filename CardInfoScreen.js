
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'


function CardInfoScreen() {
    const [cardNumber, setCardNumber] = useState('');
    const [cardCvv, setCardCvv] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [isSaved, setIsSaved] = useState(false); // Track the saved status
  
    const handleSaveCardInfo = () => {
      // Perform logic to save card info here
      console.log('Card Number:', cardNumber);
      console.log('CVV:', cardCvv);
      console.log('Expiration Date:', expirationDate);
      setIsSaved(true); // Set the saved status to true
    };
  
    const navigation = useNavigation();
  
    const handleGoBack = () => {
      navigation.goBack();
    };
  
    return (
      <View style={styles.container}>
  
        <Text style={styles.headerText}>Your Card Info</Text>
  
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          value={cardNumber}
          onChangeText={setCardNumber}
        />
  
        <TextInput
          style={styles.input}
          placeholder="CVV"
          value={cardCvv}
          onChangeText={setCardCvv}
          secureTextEntry={true}
        />
  
        <TextInput
          style={styles.input}
          placeholder="Expiration Date"
          value={expirationDate}
          onChangeText={setExpirationDate}
        />
  
        <TouchableOpacity style={styles.button} onPress={handleSaveCardInfo}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
  
        {isSaved && <Text style={styles.savedText}>Card Information Saved</Text>}
      </View>
    );
  }

  export default CardInfoScreen;