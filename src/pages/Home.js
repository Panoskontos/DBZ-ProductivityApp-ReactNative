import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import React from "react"


export default function Home() {
  

  return (
    <View style={styles.home}>
        <View style={styles.top}>
            <View style={styles.container}>
            <Text style={styles.text}>
             This is home page
            </Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#fff',
   
  },

  container:{
        paddingTop:36,
        paddingRight:20,
        paddingLeft:20,

},

text:{
    color:"white"
},

  top:{
    backgroundColor:'#221040'
  },
 
});
