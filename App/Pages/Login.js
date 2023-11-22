import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import {SIZES, COLORS, } from '../../constant'
const Login = () => {
  return (
    <View style={styles.container}>
      {/* <Stack.Screen/> */}
    <View><Text style={styles.logInText}>Log in</Text></View>
      <Text>Login</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:'#fff',
        alignItems:'center',
        backgroundColor:COLORS.primary,
        justifyContent:'center' 
    },
    logInText: {
        fontSize:20,
        color:"black",
        marginTop:35,
        textAlign:'left'

    }
})