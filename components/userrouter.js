import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import nologinpage from './nologinpage';
import Register from './register';

const Stack = createStackNavigator();

export default function userrouter() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="nologinpage" component={nologinpage} options={{headerShown:false}} />
      <Stack.Screen name="register" component={Register} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}