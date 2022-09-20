import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import React from "react"


export default function Tasks() {

    const tasks = [
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

    ]

    const showTasks = () =>{
        return tasks.map((i)=>{
            return(
            <View style={styles.task} key={i.id}>
                <Text style={styles.task_title}>{i.title}</Text>
            </View>

            )
        })
    }

    const styles = StyleSheet.create({

        tasks:{
            // backgroundColor:'red',
            flex:1,
            paddingTop:20
        },
        title:{
            fontSize:30,
            color:"#646da1",
            fontWeight:"700",
            marginBottom:20
        },

        container:{
            paddingLeft:20,
            paddingRight:20
        },

        task:{
            backgroundColor:"white",
            borderRadius:5,
            padding:20,
            marginBottom:10,
            shadowColor:"#1b1b1b",
            shadowOffset:{
                width:0,
                height:5
              },
              shadowOpacity:0.1,
              textShadowRadius:6.68

        },
        task_title:{
            fontSize:18,
            color:"#7c8bc0",
            fontWeight:"700",
        }
       
    });
  

  return (
   <View style={styles.tasks}>
       <View style={styles.container}>
            
            <Text style={styles.title}>Tasks</Text>
            {showTasks()}

            
       
       </View>
   </View>
  );
}


