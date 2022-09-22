import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Images from './comp/Images';
import { useState } from 'react';
import React from "react"
import Home from './src/pages/Home';
import Create from './src/pages/Create';
import Edit from './src/pages/Edit';
import Avatar from './src/pages/Avatar';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";


export default function App() {

  // Routing
  const [route, setRoute] = useState("Avatar")
  const [selected_task, setSelected_task] = useState(null)

  const [completed, setCompleted] = useState(15)
  const [progress, setProgress] = useState(3)
  const [deleted, setDeleted] = useState(0)

  const [tasks, setTasks] = useState([
    {
        id:`skills_${new Date().getTime()}_${Math.random()}`,
        title: "Work",
        completed:false
    },
    {
        id:`skills_${new Date().getTime()}_${Math.random()}`,
        title: "Workout",
        completed:false

    },
    {
        id:`skills_${new Date().getTime()}_${Math.random()}`,
        title: "Programm",
        completed:false

    },

])


  const showPages = () =>{
    switch(route){
      case "Home":
        return <Home 
        route={route} 
        setRoute={setRoute} 
        tasks={tasks} 
        setTasks={setTasks} 
        setSelected_task={setSelected_task} 
        completed={completed}
        progress={progress}
        deleted={deleted}
        setDeleted={setDeleted}
        setCompleted={setCompleted}
        setProgress={setProgress}
        />
        break;
      case "Create":
        return <Create 
        route={route} 
        setRoute={setRoute} 
        tasks={tasks} 
        setTasks={setTasks} 
        progress={progress}
        setProgress={setProgress}
        />
        break;
        case "Edit":
          return <Edit route={route} setRoute={setRoute} tasks={tasks} setTasks={setTasks} selected_task={selected_task} />
          break;
        case "Avatar":
          return <Avatar route={route} setRoute={setRoute} />
          break;
      default:
        break;

    }
  }

  return (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>

    <View style={styles.container}>
      {showPages()}


    </View>
    </IconComponentProvider>
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
