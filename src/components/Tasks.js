import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight,ScrollView } from 'react-native';
import { useState } from 'react';
import React from "react"
// import { Icon } from "@rneui/themed";
import { IconComponentProvider, Icon } from "@react-native-material/core";


export default function Tasks(props) {

    const [seed, setSeed] = useState(Math.random())
    const reset = () =>{
        setSeed(Math.random())
    }

    const editTask = (id) =>{
        props.setSelected_task(id)
        props.setRoute("Edit")

      }

    const deleteTask = (id) =>{
        var new_tasks = props.tasks
        new_tasks = new_tasks.filter(task => task !== id);
        props.setTasks(new_tasks)
        props.setDeleted(props.deleted+1)
        props.setProgress(props.progress-1)
        
    }


    const completedTask = (id) =>{
        var new_tasks = props.tasks
        // update object
        var index = new_tasks.findIndex((task => task === id));

        if(id.completed){
            new_tasks[index].completed = false
            props.setTasks(new_tasks)
            reset()
            props.setCompleted(props.completed-1)
            // props.setProgress(props.progress+1)
            return;
        }
        new_tasks[index].completed = true
        props.setTasks(new_tasks)
        reset()
        props.setCompleted(props.completed+1)
        // props.setProgress(props.progress-1)
        
    }

    const showTasks = () =>{
        return props.tasks.map((i)=>{
            return(
            <View style={styles.task} key={i.id}>
                <Text style={styles.task_title}>{i.title}</Text>

                <TouchableHighlight onPress={()=>editTask(i)}>
                    <Icon name="application-edit-outline" size={24} color="#646da1" style={{marginLeft:23}}/>
                </TouchableHighlight>

                <TouchableHighlight onPress={()=>deleteTask(i)}>
                    <Icon name="delete" size={24} color="#646da1" style={{marginLeft:23}}/>
                </TouchableHighlight>

                <TouchableHighlight onPress={()=>completedTask(i)} key={seed}>
                    <Icon name={i.completed?"check-circle-outline":"checkbox-blank-circle-outline"} size={24} color={i.completed?"green":"#646da1"} style={{marginLeft:23}}/>
                </TouchableHighlight>
                
            </View>

            )
        })
    }

    const styles = StyleSheet.create({

        tasks:{
            // backgroundColor:'red',
            flex:1,
            paddingTop:20,
            
        },
        title:{
            fontSize:30,
            color:"#646da1",
            fontWeight:"700",
            marginBottom:20
        },

        container:{
            paddingLeft:20,
            paddingRight:20
        },

        task:{
            backgroundColor:"white",
            borderRadius:5,
            flexDirection:'row',
            alignItems:'center',
            padding:20,
            marginBottom:10,
            shadowColor:"#1b1b1b",
            shadowOffset:{
                width:0,
                height:5
              },
              shadowOpacity:0.1,
              textShadowRadius:6.68

        },
        task_title:{
            fontSize:18,
            color:"#7c8bc0",
            fontWeight:"700",
        }
       
    });
  

  return (
   <View style={styles.tasks}>
       <View style={styles.container}>
            
            <Text style={styles.title}>Tasks</Text>
            <ScrollView>
            {showTasks()}
            <Text>{`\n`}</Text>
            <Text>{`\n`}</Text>
            </ScrollView>


            
       
       </View>

        

   </View>
  );
}


