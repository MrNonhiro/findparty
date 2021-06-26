import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert, } from 'react-native'
import { NativeRouter, Route, Link } from "react-router-native";

const nologinpage = () => {
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}> ข้อมูลส่วนตัว </Text>
            </View>
            <View style={styles.box2}>
                <Image source={require('../images/userpage.png')} style={styles.image}/>
                <Text style={styles.text2}> Guest </Text>

            <Button color="green" style={{fontSize: 20, borderRadius:10, backgroundColor : "gree", }}
                title="คลิกเพื่อสมัครสมาชิก"
                onPress={() => Alert.alert('ไปยังหน้าสมัครสมาชิก')}>
           </Button>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        height: 100,
        padding: 10,
        backgroundColor: '#00B900',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    box2: {
        flex: 1,
        alignItems: 'center',
        marginTop: '10%',
    },
    text: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginTop: '5%'
    },
    text2: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginTop: '3%'
    },
    image: {
        width: 150,
        height: 150,
    },
})

export default nologinpage;