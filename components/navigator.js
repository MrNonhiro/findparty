import React from 'react';
import { View, Image } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './home';
import Nonuserparty from './nonuserparty';
import Nologinpage from './nologinpage';
import userrouter from './userrouter';
import nologinpage from './nologinpage';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (   
   
    <Tab.Navigator 
        tabBarOptions={{
            style:{
                height: '8%',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
            }
        }}
    >
    <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
            tabBarIcon: ({focused}) => (
                <View>
                    <Image 
                        source={require('../images/homepage.png')}
                        resizeMode="contain"
                        style={{
                            width: 35,
                            height:35,
                            tintColor: focused ? 'green' : 'black',
                        }}
                    />
                </View>
            )
        }}
    />
    <Tab.Screen 
        name="Party" 
        component={Nonuserparty}
        options={{
            tabBarIcon:({focused}) => (
                <Image
                    source={require('../images/community.png')}
                    resizeMode="contain"
                    style={{
                        width: 45,
                        height: 45,
                        tintColor: focused ? 'green' : 'black',
                    }}
                />
            ),
        }}
    />
    <Tab.Screen 
        name="User" 
        component={nologinpage} 
        options={{
            tabBarIcon: ({focused}) => (
                <View>
                    <Image 
                        source={require('../images/user.png')}
                        resizeMode="contain"
                        style={{
                            width: 40,
                            height:40,
                            tintColor: focused ? 'green' : 'black',
                        }}
                    />
                </View>
            )
        }}
    />

    </Tab.Navigator>
    
  )
}

export default Navigator;