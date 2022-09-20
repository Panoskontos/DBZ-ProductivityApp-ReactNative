import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Images from './comp/Images';
import { useState } from 'react';
import React from "react"
import Home from './src/pages/Home';
import Create from './src/pages/Create';

export default function App() {

  // Routing
  const [route, setRoute] = useState("Create")
  const showPages = () =>{
    switch(route){
      case "Home":
        return <Home />
        break;
      case "Create":
        return <Create />
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
    // backgroundColor: 'white',
    
  },



  text:{
    color:'white'
  }
});
