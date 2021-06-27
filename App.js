import React from 'react';
import { StyleSheet } from 'react-native';
import Navigator from './components/navigator';
import nologinpage from './components/nologinpage';
import Register from './components/register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Navigator" component={Navigator} options={{headerShown:false}} />
          <Stack.Screen name="nologinpage" component={nologinpage} options={{headerShown:false}} />
          <Stack.Screen name="register" component={Register} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App;