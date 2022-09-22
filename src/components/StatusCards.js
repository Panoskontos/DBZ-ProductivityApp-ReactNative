import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import React from "react"


export default function StatusCards(props) {

    const styles = StyleSheet.create({
      statusCards:{
        flexDirection:'row',
        // backgroundColor:'red',
        marginBottom:20

      },

      column:{
        flex:1,
        padding:5,
        height:150,
        // backgroundColor:'white',
        
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

      card_inprogress:{
        flex:1,
        backgroundColor:'#6730bf',
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

      card_deleted:{
        flex:1,
        backgroundColor:'#452080',
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
        color:'white',
        alignSelf:"center"

      },
      numberContainer:{
        // backgroundColor:'white',
        flex:1,
        alignItems:'center',
        justifyContent:'center'

      },
      number:{
        color:'white',
        // backgroundColor:'#5611ee',
        fontSize:35,
        fontWeight:"100"
      },
       
      });
  

  return (
    <View style={styles.statusCards}>
      <View style={styles.column}>


        <View style={styles.card_complete}>
          
          <View>
              <Text style={styles.title}>Completed</Text>
          </View>
          <View style={styles.numberContainer}>
              <Text style={styles.number}>{props.completed}</Text>
          </View>

        </View>


      </View>
      <View style={styles.column}>
      <View style={styles.card_inprogress}>
          
          <View>
              <Text style={styles.title}>In progress</Text>
          </View>
          <View style={styles.numberContainer}>
              <Text style={styles.number}>{props.progress}</Text>
          </View>

        </View>
      </View>
      {/* <View style={styles.column}>
      <View style={styles.card_deleted}>
          
          <View>
              <Text style={styles.title}>Deleted</Text>
          </View>
          <View style={styles.numberContainer}>
              <Text style={styles.number}>{props.deleted}</Text>
          </View>

        </View>
      </View> */}
        
    </View>
  );
}


