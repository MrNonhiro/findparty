import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Topnavigator from './topnavigator'

const Home = () => {
  return (
    <View style={styles.container}>
      {
          // header
        }
      <View style={styles.headerbox}>
            <View style={styles.header}>
                <View style={styles.searchbar}>
                    <Icon name="ios-search" style={styles.icon} />
                    <TextInput placeholder="ค้นหา" />
                </View>
                <View style={styles.box2}>
                    <Image source={require('../images/noti.png')} style={styles.image} />
                </View> 
            </View>      
            <View style={styles.textbox}>
                  
            </View>
      </View>
        {
          // promotion
        }
      <View style={{ flex: 0.5 }}>
        <View style={styles.pomobox}>
          <Text style={styles.pomotext}> โปรโมชัน </Text>
          <Image source={require('../images/shirt1.jpg')} style={styles.pomoimage} />
        </View>
      </View>

        {
          // goods view
        }
        <View style={styles.goodscontainer}>
        <Text style={styles.pomotext}> กำลังมาแรง </Text>
          <View style={{ flexDirection: 'row' }}>
              <View style={styles.insidegoodsbox} elevation={5}>
                <Image source={require('../images/shirt1.jpg')} style={styles.goodsimage} />    
              <Text style={{ fontSize: 15 }}> เสื้อแฟชัน sleeveless </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 15, color: 'red' }}> 150 B </Text>
                <Text style={{ fontSize: 15, color: 'black' }}> / คน </Text>
              </View>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../images/shirt1.jpg')} style={styles.goodslogo} />
                  <Text style={{ fontSize: 13, textAlign: 'center', paddingTop: 8  }}> Fashion men shop </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../images/shirt1.jpg')} style={styles.goodslogo} />
                  <Text style={{ fontSize: 13, textAlign: 'center', paddingTop: 8 }}> หารกัน 3 ชิ้น </Text>
                </View>
              </View>
              <View style={styles.insidegoodsbox} elevation={5}>
              <Image source={require('../images/shirt1.jpg')} style={styles.goodsimage} />       
              <Text style={{ fontSize: 15 }}> เสื้อแฟชัน sleeveless </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 15, color: 'red' }}> 150 B </Text>
                <Text style={{ fontSize: 15, color: 'black' }}> / คน </Text>
              </View>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../images/shirt1.jpg')} style={styles.goodslogo} />
                  <Text style={{ fontSize: 13, textAlign: 'center', paddingTop: 8  }}> Fashion men shop </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../images/shirt1.jpg')} style={styles.goodslogo} />
                  <Text style={{ fontSize: 13, textAlign: 'center', paddingTop: 8 }}> หารกัน 3 ชิ้น </Text>
                </View>
              </View>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5'
  },
    header: {
        height: 50,
        padding: 10,
        backgroundColor: '#00B900',
        flexDirection: 'row'
    },
    searchbar: {
        height: '130%',
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    box2: {
        alignItems: 'flex-end',
        alignItems: 'center',
        paddingTop: '1.5%',
        paddingLeft: '2%'
    },
    inputbox:{
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        width: '75%',
        marginLeft: '2.5%'
    },
    text1: {
        color: 'white',
        fontSize: 18,
        textAlign: 'left',
        flexDirection: 'row',
        marginTop: '4%',
        marginLeft: '2%'
    },
    icon: {
        fontSize: 25,
    },
    textbox: {
        height: 50,
        backgroundColor: 'black',
        flexDirection: 'column',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#00B900',
        flexDirection: 'row'
    },
    image: {
        width: 30,
        height: 30,
        paddingTop: 5
    },
    pomobox: {
      height: '70%',
      padding: 5,
      borderColor: 'black'
  },
    pomoimage:{
      width: '100%',
      height: '110%',
    },
    pomotext: {
      fontSize: 30,
      color: 'black'
    },
    goodscontainer: {
      flex: 1,
    },
    goodsimage: {
      width: '99%',
      height: '45%',
    },
    insidegoodsbox: {
      padding: '2%',
      width: '50%',
      height: '90%',
      backgroundColor: '#FFFF',
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      borderRadius: 25,
      marginHorizontal: 2,
      alignItems: 'flex-start'
    },
    goodslogo: {
      width: 40,
      height: 40,
      borderRadius: 100/3
    },
})

export default Home;