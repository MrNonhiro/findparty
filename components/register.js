import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Topnavigator from './topnavigator'

const register = () => {
  return (
   <View style={styles.container}>
        <ImageBackground source={require('../images/loginregiswall.png')} style={styles.image}>
    </ImageBackground>
    <Topnavigator />  
   </View>
   
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },   
})

export default register;