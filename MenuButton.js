import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MenuButton = ({ navigation }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Track whether the dropdown menu is visible

  const handleProfile = () => {
    setIsMenuVisible(false);
    navigation.navigate('Profile');
  };

  const handleLocation = () => {
    setIsMenuVisible(false);
    navigation.navigate('LocationScreen');
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <View>
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <Icon name="cog" size={30} color="black" />
      </TouchableOpacity>

      <Modal visible={isMenuVisible} transparent={true} animationType="fade">
        <TouchableOpacity style={styles.modalBackground} onPress={toggleMenu}>
          <View style={styles.dropdownMenu}>
            <TouchableOpacity style={styles.menuItem} onPress={handleProfile}>
              <Text style={styles.menuItemText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={handleLocation}>
              <Text style={styles.menuItemText}>Location</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    top: -250,
    right: -170,
    zIndex: 1, // Ensure the button is above the dropdown menu
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  dropdownMenu: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
  },
  menuItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  menuItemText: {
    fontSize: 16,
    color: 'black',
  },
});

export default MenuButton;

