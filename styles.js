
import { StyleSheet } from 'react-native';




const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Homecontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  LogoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 80,
    opacity: 0,
  },

  buttonContainer: {
    marginBottom: 40,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  login_sign_button: {
    backgroundColor: 'blue',
    paddingHorizontal: 150,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
    input: {
      width: '80%',
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    resultItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    logoutButtonContainer: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    logoutButton: {
      position: 'absolute',
      top: 30,
      right: 5,
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 5,
    },
    logoutButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    itemInfo: {
      flex: 1,
    },
    menuButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 1, // Ensure the button is above the dropdown menu
    },
    dropdownMenu: {
      position: 'absolute',
      top: 60,
      right: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    menuItem: {
      paddingVertical: 8,
    },
    menuItemText: {
      fontSize: 16,
    },
    goBackButton: {
      position: 'absolute',
      top: 80,
      left: 15,
      zIndex: 1,
    },
    goBackButtonText: {
      color: 'blue',
      fontSize: 16,
    },
    savedText: {
      color: 'green',
      fontSize: 16,
      marginTop: 10,
    },
    confirmationContainer: {
      backgroundColor: '#f2e94e',
      padding: 8,
      marginBottom: 16,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    confirmationText: {
      fontSize: 18,
      color: '#333',
      fontFamily: 'Arial',
      fontWeight: 'bold',  
    },
    Logoimage: {
      width: 200,
      height: 100,
      marginTop: 200,
      marginLeft: 75,
    }, 
    errorText: {
      width: 220,
      height: 15
    }
  });
  
  export default styles;