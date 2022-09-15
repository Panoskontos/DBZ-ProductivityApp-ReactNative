import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import React from "react"


export default function Header() {
  

  return (
    <View style={styles.header}>
        <Text>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "red",
   
  },
 
});
