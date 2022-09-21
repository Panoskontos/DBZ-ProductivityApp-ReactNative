import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Images from './comp/Images';
import { useState } from 'react';
import React from "react"
import Home from './src/pages/Home';
import Create from './src/pages/Create';

export default function App() {

  // Routing
  const [route, setRoute] = useState("Home")

  const [tasks, setTasks] = useState([
    {
        id:`skills_${new Date().getTime()}_${Math.random()}`,
        title: "Clean Car"
    },
    {
        id:`skills_${new Date().getTime()}_${Math.random()}`,
        title: "Pay Net"
    },
    {
        id:`skills_${new Date().getTime()}_${Math.random()}`,
        title: "Git puts"
    },

])


  const showPages = () =>{
    switch(route){
      case "Home":
        return <Home route={route} setRoute={setRoute} tasks={tasks} setTasks={setTasks} />
        break;
      case "Create":
        return <Create route={route} setRoute={setRoute} tasks={tasks} setTasks={setTasks} />
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
