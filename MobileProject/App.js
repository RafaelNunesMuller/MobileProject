import 'react-native-gesture-handler';
import CreateConsultationScreen from './telas/CriarConsultaTESTE';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import LoginUsu from './telas/LoginUsu';
import Home from './telas/Home';

function TabBar(){
  const Tab = createBottomTabNavigator(); 
  return(
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor: '#FFFFFF',
      tabBarInactiveTintColor: '#000',
      tabBarActiveBackgroundColor: 'red',
      tabBarInactiveBackgroundColor: 'blue',
      headerStyle:{backgroundColor:'#f4511e'},
      headerTintColor:'#FFF',
      headerTitleAlign:'center',
      size: 40,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
          return <MaterialIcons name={'home'} size={size} color={color} />;
        } 
      },
    })}>
      <Tab.Screen name='Home' component={Home}></Tab.Screen>
    </Tab.Navigator> 
)}
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"> 
        <Stack.Screen name="Login" component={LoginUsu} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='CriarConsulta' options={{headerShown:false}} component={CreateConsultationScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );

}


