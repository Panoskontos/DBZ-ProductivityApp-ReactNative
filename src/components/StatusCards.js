import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import React from "react"


export default function StatusCards() {

    const styles = StyleSheet.create({
      statusCards:{
        flexDirection:'row',
        backgroundColor:'red',
        marginBottom:20

      },

      column:{
        flex:1,
        padding:5,
        height:150,
        backgroundColor:'white',
        
      },

      card_complete:{
        flex:1,
        backgroundColor:'#7418ff',
        borderRadius:10,
        padding:10,
        shadowColor:'#7418ff',
        shadowOffset:{
          width:0,
          height:10
        },
        shadowOpacity:0.2,
        textShadowRadius:6.68

      },
      title:{

      },
      number:{

      },
       
      });
  

  return (
    <View style={styles.statusCards}>
      <View style={styles.column}>
        <View style={styles.card_complete}>
          
          <View>
              <Text style={styles.title}>Completed</Text>
          </View>
          <View>
              <Text style={styles.number}>100</Text>
          </View>

        </View>
      </View>
      <View style={styles.column}>
        <Text>Status Cards</Text>
      </View>
      <View style={styles.column}>
        <Text>Status Cards</Text>
      </View>
        
    </View>
  );
}


