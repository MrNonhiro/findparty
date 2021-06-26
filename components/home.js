import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Goods from './Goods';
import Promotion from './Promotion';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}> โปรโมชัน </Text>
      <Promotion />
      <Text style={styles.text}> กำลังมาแรง </Text>
      <Goods />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
  }
})

export default Home;