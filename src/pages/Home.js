import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import React from "react"
import Header from '../components/Header';
import StatusCards from '../components/StatusCards';
import Tasks from '../components/Tasks';


export default function Home(props) {

  const handleAddButton = () =>{
      props.setRoute("Create")
  }
  

  return (
    <View style={styles.home}>
        

        <View style={styles.top}>
            <View style={styles.container}>
                
                <Header />

                <StatusCards />
            {/* <Text style={styles.text}>
             This is home page
            </Text> */}
            </View>
        </View>


        
                <Tasks />
        
        <TouchableOpacity style={styles.addTaskBtn} onPress={()=>{handleAddButton()}}>
            <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#F7FAFD',
   
  },

  container:{
        paddingTop:36,
        paddingRight:20,
        paddingLeft:20,
        

},

addTaskBtn:{
    backgroundColor:'#fff740',
    width:80,
    height:80,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius:50,
    position:'absolute',
    bottom:20,
    right:20,
    shadowColor:'1b1b1b',
    shadowOffset:{
        width:0,
        height:5
    },
    shadowOpacity:0.2,
    shadowRadius:6.68,
    


},

text:{
    color:"white"
},

  top:{
    backgroundColor:'#221040'
  },
 
});
