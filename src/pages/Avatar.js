import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Image } from 'react-native';
import { useState } from 'react';
import React from "react"
import Header from '../components/Header';
import StatusCards from '../components/StatusCards';
import Tasks from '../components/Tasks';


export default function Avatar(props) {
    
    const goBack = () =>{
        props.setRoute("Home")
    }

    const choseAvatar = (i) =>{
        props.setChosenAvatar(i)
        props.setRoute("Home")
    }


    const showAvatars = () =>{
        const uris=[
            'https://avatarfiles.alphacoders.com/781/thumb-78133.png',
            'https://avatarfiles.alphacoders.com/147/thumb-147194.jpg',
            'https://avatarfiles.alphacoders.com/700/thumb-70000.png',
            'https://avatarfiles.alphacoders.com/121/thumb-121874.png',
            'https://avatarfiles.alphacoders.com/168/thumb-168561.jpg',
            'https://avatarfiles.alphacoders.com/818/thumb-81849.png',
            'https://avatarfiles.alphacoders.com/123/thumb-123564.jpg',
            'https://avatarfiles.alphacoders.com/274/thumb-274766.jpg',
            'https://avatarfiles.alphacoders.com/170/thumb-170306.png',
        ]

        return(

            uris.map((i)=>{
                return(
            <TouchableOpacity onPress={()=>{choseAvatar(i)}}>
                    <View style={styles.headerProfileContainer}>
                        <Image  
                            style={styles.headerProfile}
                            source={{
                                uri:i
                                // uri:''
                            }} />
                    </View>
            </TouchableOpacity>        
            )
        })
        )
    }


    const styles = StyleSheet.create({
        home: {
          flex: 1,
          backgroundColor: '#F7FAFD',
        },

        title:{
            marginTop:30,
            padding:20,
            fontSize:30,
            fontWeight:'600',
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        },

        backBtn:{
            padding:20,
            backgroundColor:"darkblue",
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

        backBtn_text:{
            color:"white"
        },

        container:{
            // backgroundColor:"red",
            paddingTop:30,
            paddingHorizontal:20,
            width:"100%",
            height:"70%",
            overflow:"hidden",
            display:"float",
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent:"space-around"
            
           
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
            marginRight:35,
            width:60,
            height:60,
            shadowColor:'grey',
            shadowOffset:{
                width:1,
                height:5
            },
            shadowOpacity:1,
            shadowRadius:6.68,
        },


        })
  
 
  return (
    <View style={styles.home}>
        <Text style={styles.title}>Choose your Avatar</Text>


        <View style={styles.container}>
            {showAvatars()}
        </View>

        {/* <View > */}
        <TouchableOpacity
        style={styles.backBtn}
        onPress={()=>goBack()}
      >
            <Text style={styles.backBtn_text}>Back</Text>
      </TouchableOpacity>
        {/* </View> */}
    </View>
  );
}

