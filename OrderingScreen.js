import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import MenuButton from './MenuButton';
import styles from './styles';
import pickerSelectStyles from './pickerSelectStyles';

const OrderingScreen = ({ route }) => {
  const navigation = useNavigation();
  const { itemName } = route.params;
  const [quantity, setQuantity] = useState('');
  const [frequency, setFrequency] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleOrder = () => {
    if (!quantity || !frequency) {
      setErrorMessage('Invalid selection. Please pick a quantity and time interval.');
    } else {
      setErrorMessage('');
      navigation.navigate('Search', { orderConfirmed: true });
    }
  };

  return (
    <View style={styles.container}>
      <MenuButton navigation={navigation} />

      <Text style={styles.headerText}>Ordering: {itemName}</Text>

      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />

      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => setFrequency(value)}
        items={[
          { label: 'Every day', value: 'every_day' },
          { label: 'Every week', value: 'every_week' },
          { label: 'Every month', value: 'every_month' },
        ]}
        placeholder={{
          label: 'How often?',
          value: null,
        }}
      />

      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleOrder}>
        <Text style={styles.buttonText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderingScreen;

