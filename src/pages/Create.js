import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { useState } from 'react';
import React from "react"
import Header from '../components/Header';
import StatusCards from '../components/StatusCards';
import Tasks from '../components/Tasks';


export default function Create() {

  const [text, onChangeText] = React.useState("Enter title");
  const [text2, onChangeText2] = React.useState("Enter text");


  const styles = StyleSheet.create({
    home: {
      flex: 1,
      backgroundColor: '#F7FAFD',
     
    },

    top:{
      // backgroundColor:'red',
      padding:20,
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
      

    },
  
    container:{
          paddingTop:36,
          paddingRight:20,
          paddingLeft:20,
          
  
  },

  backBtn:{
  backgroundColor:'black',
  width:80,
  height:80,
  justifyContent: 'center',
  alignItems:'center',
  borderRadius:50,
  position:'absolute',
  bottom:20,
  left:20,
  shadowColor:'1b1b1b',
  shadowOffset:{
      width:0,
      height:5
  },
  shadowOpacity:0.2,
  shadowRadius:6.68,
},

plus:{
  color:'white'
}
,
top_title:{
    fontWeight:'700',
      fontSize:25,
      color:'grey'
},
mid_title:{
  fontWeight:'700',
  fontSize:20,
},

input:{
  height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius:10,
    borderColor:'lightgrey',
    color:'grey',
    padding: 10,
    marginLeft:20,
    backgroundColor:'white'
},

input2:{
     height: 100,
    margin: 12,
    borderWidth: 1,
    borderRadius:10,
    borderColor:'lightgrey',
    color:'grey',
    padding: 10,
    marginLeft:20,
    textAlignVertical:"top",
    backgroundColor:'white',
}
    
    
  
  
  });
  
  

  return (
    <View style={styles.home}>
        

        <View style={styles.top}>
            <Text style={styles.top_title}>Create Task</Text>
        </View>
        <View style={styles.top}>
            <Text style={styles.mid_title}>Title</Text>
              
              <SafeAreaView >
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText}
                  value={text}
                />
              </SafeAreaView>


              <SafeAreaView >
                <TextInput
                  style={styles.input2}
                  onChangeText={onChangeText2}
                  value={text2}
                  multiline={true}
                />
              </SafeAreaView>

        </View>

     

        
                {/* <Tasks /> */}


                <TouchableOpacity style={styles.backBtn}>
            <Text style={styles.plus}>Back</Text>
        </TouchableOpacity>
        
        
    
    </View>
  );
}

