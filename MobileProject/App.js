import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import LoginUsu from './telas/LoginUsu';
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
      <Stack.Navigator initialRouteName="Login"> 
        <Stack.Screen name="Login" component={LoginUsu} options={{ headerShown: false }} />
        <Stack.Screen name="Hometab" component={BottomTabBar} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
