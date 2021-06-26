import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'

const Header = () => {
    return(
        <View style={styles.header}>
            <View style={styles.box}>
                <TextInput style={styles.inputbox} width="85%" placeholder="ค้นหา">
                </TextInput>     
                <Image source={require('../images/noti.png')} style={styles.ImageStyle2} />   
            </View>
            <View style={styles.box2}>
                <Text style={styles.text2}> เสื้อผ้า  คอมพิวเตอร์ </Text>
            </View>
        </View>      
    )
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
    },
    inputbox:{
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        width: '75%',
        marginLeft: '2%'
    },
    header: {
        height: 100,
        padding: 10,
        backgroundColor: '#00B900',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    textinput: {
        color: 'black',
        margin: 10,
        fontSize: 15,
        textAlign: 'left',
        backgroundColor: 'white',
        borderRadius: 10
    },
    text2: {
        color: 'white',
        fontSize: 18,
        textAlign: 'left',
        flexDirection: 'row',
        marginTop: '2.5%',
        marginLeft: '1%'
    },
    ImageStyle2: {
        height: '75%',
        width: '10%',
        marginTop: '2%',
        marginLeft: '3%'
    },
})

export default Header;