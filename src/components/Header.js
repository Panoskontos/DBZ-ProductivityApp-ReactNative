import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import React from "react"


export default function Header() {

    const styles = StyleSheet.create({
        header: {
        //   backgroundColor: "red",
        width:'100%',
        borderRadius:10,
        padding:10,
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
        }
       
      });
  

  return (
    <View style={styles.header}>
        <View style={styles.headerProfileContainer}>

            <Image  
            style={styles.headerProfile}
            source={{
                uri:'https://randomuser.me/api/portraits/men/86.jpg'
            }}
            />

            </View>

            <View style={styles.welcomeMsg}>
                <Text style={styles.greetings}>
                    Hi, I'm Jeff
                </Text>
                <Text style={styles.subMsg}>
                    Last time you completed 4 tasks
                </Text>
            </View>
    </View>
  );
}


