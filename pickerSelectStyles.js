import { StyleSheet } from 'react-native';


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      width: "80%",
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
      alignSelf: 'center'
    },
    inputAndroid: {
      width: "80%",
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });

  export default pickerSelectStyles;