import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navigator from './components/navigator';

const App = () => {
  return (
    <Navigator />
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

export default App;