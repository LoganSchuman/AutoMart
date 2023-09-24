import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import algoliasearch from 'algoliasearch';
import MenuButton from './MenuButton';
import styles from './styles'
import { StyleSheet } from 'react-native';



const SearchResults = ({ navigation, route }) => {
    const { query } = route.params;
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const client = algoliasearch('ILP6LW0SQB', '9e1377e3cb9058a0f213e69c98ba2cff');
      const index = client.initIndex('auto_data');
  
      const fetchProducts = async () => {
        try {
          console.log('Search query:', query);
          const response = await index.search(query);
          console.log('Search response:', response);
          setProducts(response.hits);
        } catch (error) {
          console.log('Error occurred during search:', error);
        }
      };
  
      fetchProducts();
    }, [query]);
  
  
    return (
      <View style={styles.container}>
        <MenuButton navigation={navigation} />
  
        <Text style={searchstyles.ResultsText}>Search Results</Text>
  
        {products.length === 0 ? (
          <Text>No matching products found.</Text>
        ) : (
          products.map((product) => (
            <TouchableOpacity
              key={product.objectID}
              style={styles.resultItem}
              onPress={() =>
                navigation.navigate('Ordering', { itemName: product.name })
              }
            >
              <View style={styles.itemContainer}>
                <Image source={{ uri: product.imageURL }} style={searchstyles.itemImage} />
                <View style={styles.itemInfo}>
                  <Text style={searchstyles.itemName}>{product.name}</Text>
                  <Text style={searchstyles.itemPrice}>{product.price}</Text>
                  <Text style={searchstyles.itemDescription}>{product.description}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </View>
    );
  };

  const searchstyles = StyleSheet.create({

    ResultsText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    itemName: {
      fontWeight: 'bold',
      marginRight: 10,
    },
    itemPrice: {
      fontWeight: 'bold',
      marginLeft: 250,

    },
    itemDescription: {
      flex: 1,
      marginTop: -15
    },
    itemImage: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
  })

  export default SearchResults;