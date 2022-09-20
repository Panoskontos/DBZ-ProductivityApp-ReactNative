import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import React from "react"


export default function Tasks() {

    const styles = StyleSheet.create({

        tasks:{
            backgroundColor:'red',
            flex:1
        }
       
    });
  

  return (
   <View style={styles.tasks}>
        <Text>Tasks</Text>
   </View>
  );
}


