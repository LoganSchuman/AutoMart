import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import MenuButton from './MenuButton';
import CardInfoScreen from './CardInfoScreen';
import SearchScreen from './SearchScreen';
import SignUpScreen from "./SignUpScreen";
import LoginScreen from './LoginScreen';
import SearchResults from './SearchResults';
import OrderingScreen from './OrderingScreen';
import ProfileScreen from './Profile';
import LocationScreen from './LocationScreen';




const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Search" component={SearchScreen}/>
        <Stack.Screen name="SearchResults" component={SearchResults}/>
        <Stack.Screen name="Ordering" component={OrderingScreen} options={({ navigation }) => ({ headerRight: () => <MenuButton navigation={navigation}/>})}/>
        <Stack.Screen name="CardInfo" component={CardInfoScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="LocationScreen" component={LocationScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}





