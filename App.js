import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Images from './comp/Images';
import { useState } from 'react';
import React from "react"


export default function App() {
  const [route, setRoute] = useState("Home")
  const showPages = () =>{
    switch(route){
      case "Home":
        return <Text>Home</Text>
        break;
      default:
        break;

    }
  }

  return (
    <View style={styles.container}>
      {showPages()}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    color:'white'
  }
});
