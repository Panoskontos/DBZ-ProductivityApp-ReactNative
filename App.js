import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Images from './comp/Images';
import { useState } from 'react';
import React from "react"
import Home from './src/pages/Home';

export default function App() {

  // Routing
  const [route, setRoute] = useState("Home")
  const showPages = () =>{
    switch(route){
      case "Home":
        return <Home />
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
    
  },



  text:{
    color:'white'
  }
});
