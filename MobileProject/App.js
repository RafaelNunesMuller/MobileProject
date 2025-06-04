import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginUsu from './telas/LoginUsu';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' options={{headerShown:false}} component={LoginUsu}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

