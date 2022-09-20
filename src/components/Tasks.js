import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import React from "react"


export default function Tasks() {

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

        }
       
    });
  

  return (
   <View style={styles.tasks}>
       <View style={styles.container}>
            
            <Text style={styles.title}>Tasks</Text>

            <View style={styles.task}>
                <Text style={styles.task_title}>Tasks</Text>
            </View>
       
       </View>
   </View>
  );
}


