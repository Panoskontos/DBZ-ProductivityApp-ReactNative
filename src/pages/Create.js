import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput,ImageBackground } from 'react-native';
import { useState } from 'react';
import React from "react"
import Header from '../components/Header';
import StatusCards from '../components/StatusCards';
import Tasks from '../components/Tasks';


export default function Create(props) {

  const [text, onChangeText] = React.useState("");
  const [text2, onChangeText2] = React.useState("");
  const images = [
    "https://w0.peakpx.com/wallpaper/888/241/HD-wallpaper-dbz-goku.jpg" ,
    "https://wallpaper.dog/large/20501620.jpg",
    "https://i.pinimg.com/736x/b3/1b/91/b31b915ae523d217b6d2df378dc7f4c9.jpg"
    
  ]
  // const image = { uri: images[Math.floor(Math.random() * images.length)]};
  const [image, setImage] = React.useState({ uri: images[Math.floor(Math.random() * images.length)]})


  const saveTask = () =>{
    var new_tasks = props.tasks
    new_tasks.push({
      id:`skills_${new Date().getTime()}_${Math.random()}`,
      title: text,
      completed:false

  })

    props.setTasks(new_tasks)

    props.setProgress(props.progress+1)
    props.setRoute("Home")
  }

  const handleBackButton = () =>{
    props.setRoute("Home")
}


  const styles = StyleSheet.create({
    home: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },

    top:{
      // backgroundColor:'red',
      
      padding:20,
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
      

    },

    top_container:{
      padding:20,
      marginBottom:20
      
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
      color:'darkblue',
     
},
mid_title:{
  fontWeight:'700',
  fontSize:20,
  justifyContent:"center",
  alignItems:"center"
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
    backgroundColor:'white',
    alignItems:"center"
},

input2:{
     height: 100,
    margin: 12,
    borderWidth: 1,
    borderRadius:10,
    borderColor:'lightgrey',
    color:'grey',
    padding: 15,
    marginLeft:20,
    textAlignVertical:"top",
    backgroundColor:'white',
},

submit_btn:{
  backgroundColor:'',
  alignItems:'center',
  marginBottom:80
}
,
sBtn:{
  backgroundColor:'darkblue',
  paddingTop:10,
  paddingBottom:10,
  paddingHorizontal:20,
  borderRadius:10

},

    
    
  
  
  });
  
  

  return (
    <View style={styles.home}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        

        {/* <View style={styles.top}>
            <Text style={styles.top_title}>Create Task</Text>
        </View> */}
        <View style={styles.top_container}>
            {/* <Text style={styles.mid_title}>Title</Text> */}
              
              <SafeAreaView >
                <TextInput
                  placeholder='Enter Task'
                  style={styles.input}
                  onChangeText={onChangeText}
                  value={text}
                  // multiline={true}
                />
              </SafeAreaView>


              {/* <SafeAreaView >
                <TextInput
                  placeholder='description'
                  style={styles.input2}
                  onChangeText={onChangeText2}
                  value={text2}
                  
                />
              </SafeAreaView> */}

        </View>

        <View style={styles.submit_btn}>
         <TouchableOpacity style={styles.sBtn} onPress={saveTask}>
             <Text style={{color:"white"}}>Save</Text>
          </TouchableOpacity>
        </View>
     

        
                {/* <Tasks /> */}


                <TouchableOpacity style={styles.backBtn} onPress={handleBackButton}>
                 <Text style={styles.plus}>Back</Text>
        </TouchableOpacity>
        
        

        </ImageBackground>
    </View>
  );
}

