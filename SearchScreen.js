import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import MenuButton from './MenuButton';
import styles from './styles';

const SearchScreen = ({ navigation, route }) => {
  const [query, setQuery] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  useEffect(() => {
    if (route.params?.orderConfirmed) {
      setOrderConfirmed(true);
      setTimeout(() => {
        setOrderConfirmed(false);
      }, 3000);
    }
  }, [route.params]);

  const handleQueryChange = (text) => {
    setQuery(text);
  };

  const handleSearch = () => {
    navigation.navigate('SearchResults', { query });
  };

  return (
    <View style={styles.container}>
      <MenuButton navigation={navigation} />

      <Text style={styles.headerText}>What are you looking for?</Text>

      {orderConfirmed && (
        <View style={styles.confirmationContainer}>
          <Text style={styles.confirmationText}>Your order has been confirmed</Text>
        </View>
      )}

      <TextInput
        style={styles.input}
        placeholder="Search"
        value={query}
        onChangeText={handleQueryChange}
      />

      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchScreen;
