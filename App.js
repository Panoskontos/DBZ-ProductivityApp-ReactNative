import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Images from './comp/Images';
import { useState } from 'react';
import React from "react"


export default function App() {
  const [route, setRoute] = useState("Home")
  const showPages = () =>{
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task Manager 101</Text>
      <StatusBar style="auto" />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    color:'white'
  }
});
