<<<<<<< Updated upstream
=======
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
<<<<<<< Updated upstream

import LoginUsu from './telas/LoginUsu';
import CreateConsultationScreen from './telas/CriarConsultaTESTE';
>>>>>>> Stashed changes
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

=======

import LoginUsu from './telas/LoginUsu';
import CreateConsultationScreen from './telas/CriarConsultaTESTE';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

>>>>>>> Stashed changes
import Home from './telas/Home';

function BottomTabBar(){
  const Tab = createBottomTabNavigator(); 
  return(
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:'black',
        tabBarActiveBackgroundColor:'red',
        tabBarInactiveBackgroundColor:'blue',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen name='Home' component={Home} options={{
          tabBarIcon:() => (
            <MaterialIcons name="home" size={40} color="white" />
        )
      }}/>
    </Tab.Navigator>
  )
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Screen name='CriarConsulta' options={{headerShown:false}} component={CreateConsultationScreen}></Stack.Screen>
        <Stack.Screen name='Login' options={{headerShown:false}} component={LoginUsu}></Stack.Screen>

      <Stack.Navigator initialRouteName="Login"> 
        <Stack.Screen name="Login" component={LoginUsu} options={{ headerShown: false }} />
        <Stack.Screen name="Hometab" component={BottomTabBar} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
<<<<<<< Updated upstream
=======

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
