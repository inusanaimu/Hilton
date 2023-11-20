import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={styles.container}>
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
        justifyContent:'center' 
    },
    logInText: {
        fontSize:20,
        color:"black",
        marginTop:35,
        textAlign:'left'

    }
})