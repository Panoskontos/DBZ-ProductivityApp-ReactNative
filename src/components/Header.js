import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import React from "react"


export default function Header(props) {

    const goAvatar =()=>{
        props.setRoute("Avatar")
    }

    const styles = StyleSheet.create({
        header: {
        //   backgroundColor: "red",
        width:'100%',
        borderRadius:10,
        padding:10,
        paddingTop:30,
        flexDirection:"row",
        alignItems:"center"
        
        },

        
        headerProfile:{
            height:60,
            width:60
        },


        headerProfileContainer:{
            borderRadius:50,
            overflow:'hidden',
            alignContent:'center',
            justifyContent:'center',
            width:60,
            height:60,
        },

        welcomeMsg:{
            fontSize:20,
            fontWeight:'700',
            paddingLeft: 20
        },

        greetings:{
            color:'white',
            fontSize:20,
            fontWeight:'700'
        },

        subMsg:{
            color:'#959CAC',
            fontSize:15,
            fontWeight:'300'
        }
       
      });
  

  return (
    <View style={styles.header}>
        <View style={styles.headerProfileContainer}>

            <TouchableOpacity onPress={()=>{goAvatar()}}>
            <Image  
            style={styles.headerProfile}
            source={{
                uri:props.chosenAvatar
                // uri:''
            }}
            />
            </TouchableOpacity>

            </View>

            <View style={styles.welcomeMsg}>
                <Text style={styles.greetings}>
                    Hi, Panagiotis
                </Text>
                <Text style={styles.subMsg}>
                    {/* Last time you completed 4 tasks */}
                    Start completing your daily tasks
                </Text>
            </View>
    </View>
  );
}


